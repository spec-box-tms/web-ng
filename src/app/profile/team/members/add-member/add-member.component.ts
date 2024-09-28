import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
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
import { MarkFormTouchedDirective } from '../../../../lib/forms/mark-as-touched.directive';
import { hasBadRequestError } from '../../../../lib/http-errors/http-bad-request-details';
import { HttpError } from '../../../../lib/http-errors/http-error';
import { processHttp } from '../../../../lib/process-http';
import { TeamService } from '../../../team.service';
import { TeamContextService } from '../../team-context.service';
import { loginValidator, loginValidatorText } from '../../../../lib/validators/login.validator';



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
        notFound: 'Пользователь с таким логином не найден',
        exists: 'Пользователь с таким логином уже является участником',
        login: loginValidatorText,
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
  private readonly httpError = signal<HttpError | null>(null);
  private readonly teamId = toSignal(this.teamContext.teamId$);

  readonly loading = signal(false);

  readonly form = this.fb.group({
    login: [
      '',
      [
        Validators.required,
        Validators.maxLength(255),
        loginValidator
      ],
    ],
    isAdmin: [false],
  });

  constructor() {
    effect(() => {
      const error = this.httpError();
      if (!error) {
        return;
      }
      if (error.status === 404) {
        this.form.controls.login.setErrors({
          notFound: true,
        });
      }
      if (
        error.knownError.status === 400 &&
        hasBadRequestError(error.knownError, 'login', 'exists')
      ) {
        this.form.controls.login.setErrors({
          exists: true,
        });
      }
    });
  }

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
      .pipe(processHttp(this.loading, this.httpError))
      .subscribe((result) => {
        if (result) {
          this.context.completeWith();
          this.notificationService.show('success', 'Участник успешно добавлен');
        } else {
          this.notificationService.show('error', 'Произошла ошибка');
        }
      });
  }

  cancel() {
    this.context.completeWith();
  }
}
