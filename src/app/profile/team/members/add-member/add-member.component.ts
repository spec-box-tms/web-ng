import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  TuiButton,
  TuiDialogContext,
  TuiError,
  TuiTextfield,
} from '@taiga-ui/core';
import {
  TUI_VALIDATION_ERRORS,
  TuiButtonLoading,
  TuiFieldErrorPipe,
  TuiSwitch,
} from '@taiga-ui/kit';
import { POLYMORPHEUS_CONTEXT } from '@taiga-ui/polymorpheus';
import { NotificationService } from '../../../../core/notification.service';
import {
  catchReactiveFormError,
  serverHttpErrorToText,
  serverValidationErrorsToText,
} from '../../../../lib/catch-reactive-form-errors';
import { MarkFormTouchedDirective } from '../../../../lib/forms/mark-as-touched.directive';
import { signalLoading } from '../../../../lib/signal-loading';
import {
  loginValidator,
  loginValidatorText,
} from '../../../../lib/validators/login.validator';
import { TeamService } from '../../../team.service';
import { TeamContextService } from '../../team-context.service';

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiButton,
    TuiButtonLoading,
    TuiTextfield,
    TuiFieldErrorPipe,
    TuiError,
    TuiSwitch,
    AsyncPipe,
    MarkFormTouchedDirective,
  ],
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Обязательное поле',
        maxlength: ({ requiredLength }: { requiredLength: string }) =>
          `Максимальная длина — ${requiredLength}`,
        minlength: ({ requiredLength }: { requiredLength: string }) =>
          `Минимальная длина — ${requiredLength}`,
        pattern: 'Неверный формат',
        exists: 'Пользователь с таким логином уже является участником',
        login: loginValidatorText,
        serverValidationErrors: serverValidationErrorsToText({
          'User already exists':
            'Пользователь с таким логином уже является участником',
          'User login not found': 'Пользователь с таким логином не найден',
        }),
        serverHttpError: serverHttpErrorToText(
          {
            404: 'Команда не найдена',
            403: 'Недостаточно прав для редактирования списка участников',
          },
          'Произошла непредвиденная ошибка сервера'
        ),
      },
    },
  ],
})
export class AddMemberComponent {
  private readonly teamService = inject(TeamService);
  private readonly teamContext = inject(TeamContextService);
  private readonly notificationService = inject(NotificationService);
  private readonly context = inject<TuiDialogContext>(POLYMORPHEUS_CONTEXT);
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly teamId = toSignal(this.teamContext.teamId$);

  readonly loading = signal(false);

  readonly form = this.fb.group({
    login: [
      '',
      [Validators.required, Validators.maxLength(255), loginValidator],
    ],
    isAdmin: [false],
  });

  submit() {
    const teamId = this.teamId();
    if (!teamId) {
      return;
    }
    if (!this.form.valid) {
      return;
    }
    const { login, isAdmin } = this.form.getRawValue();

    this.teamService
      .addMember$(teamId, login, isAdmin)
      .pipe(signalLoading(this.loading), catchReactiveFormError(this.form))
      .subscribe({
        next: () => {
          this.context.completeWith();
          this.notificationService.show('success', 'Участник успешно добавлен');
        },
        error: () => {
          this.notificationService.show('error', 'Произошла ошибка');
        },
      });
  }

  cancel() {
    this.context.completeWith();
  }
}
