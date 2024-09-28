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
import { POLYMORPHEUS_CONTEXT } from '@taiga-ui/polymorpheus';
import { MarkFormTouchedDirective } from '../../../lib/forms/mark-as-touched.directive';
import { HttpError } from '../../../lib/http-errors/http-error';
import { TeamService } from '../../team.service';
import { processHttp } from '../../../lib/process-http';
import { NotificationService } from '../../../core/notification.service';

@Component({
  selector: 'app-create-team-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiButton,
    TuiButtonLoading,
    TuiTextfield,
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
      },
    },
  ],
})
export class CreateTeamFormComponent {
  private readonly teamService = inject(TeamService);
  private readonly notificationService = inject(NotificationService);
  private readonly context = inject<TuiDialogContext>(POLYMORPHEUS_CONTEXT);
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly httpError = signal<HttpError | null>(null);

  readonly loading = signal(false);

  readonly form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(255)]],
    description: [''],
  });

  submit() {
    if (!this.form.valid) {
      return;
    }
    const { title, description } = this.form.getRawValue();

    this.teamService
      .createTeam$(title, description)
      .pipe(processHttp(this.loading, this.httpError))
      .subscribe((result) => {
        if (result) {
          this.context.completeWith();
          this.notificationService.show('success', 'Команда успешно создана');
        } else {
          this.notificationService.show(
            'error',
            'При создании команды произошла ошибка'
          );
        }
      });
  }

  cancel() {
    this.context.completeWith();
  }
}
