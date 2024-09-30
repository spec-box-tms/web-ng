import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
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
} from '@taiga-ui/kit';
import {
  TuiTextareaModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import { POLYMORPHEUS_CONTEXT } from '@taiga-ui/polymorpheus';
import { NotificationService } from '../../../core/notification.service';
import {
  catchReactiveFormError,
  serverValidationErrorsToText,
} from '../../../lib/catch-reactive-form-errors';
import { MarkFormTouchedDirective } from '../../../lib/forms/mark-as-touched.directive';
import { signalLoading } from '../../../lib/signal-loading';
import { TeamService } from '../../team.service';

@Component({
  selector: 'app-create-team-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiButton,
    TuiButtonLoading,
    TuiTextfield,
    TuiTextareaModule,
    TuiTextfieldControllerModule,
    TuiFieldErrorPipe,
    TuiError,
    AsyncPipe,
    MarkFormTouchedDirective,
  ],
  templateUrl: './create-team-form.component.html',
  styleUrl: './create-team-form.component.scss',
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
        serverValidationErrors: serverValidationErrorsToText({}),
      },
    },
  ],
})
export class CreateTeamFormComponent {
  private readonly teamService = inject(TeamService);
  private readonly notificationService = inject(NotificationService);
  private readonly context = inject<TuiDialogContext>(POLYMORPHEUS_CONTEXT);
  private readonly fb = inject(FormBuilder).nonNullable;

  readonly loading = signal(false);

  readonly form = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(255)],
    ],
    description: ['', [Validators.maxLength(1000)]],
  });

  submit() {
    if (!this.form.valid) {
      return;
    }
    const { title, description } = this.form.getRawValue();

    this.teamService
      .createTeam$(title, description)
      .pipe(signalLoading(this.loading), catchReactiveFormError(this.form))
      .subscribe({
        next: () => {
          this.context.completeWith();
          this.notificationService.show('success', 'Команда успешно создана');
        },
        error: () => {
          this.notificationService.show(
            'error',
            'При создании команды произошла ошибка'
          );
        },
      });
  }

  cancel() {
    this.context.completeWith();
  }
}
