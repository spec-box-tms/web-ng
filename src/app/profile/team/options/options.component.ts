import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiButton, TuiError, TuiTextfield } from '@taiga-ui/core';
import {
  TUI_VALIDATION_ERRORS,
  TuiButtonLoading,
  TuiFieldErrorPipe,
} from '@taiga-ui/kit';
import {
  TuiTextareaModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import { NotificationService } from '../../../core/notification.service';
import {
  catchReactiveFormError,
  serverHttpErrorToText,
  serverValidationErrorsToText,
} from '../../../lib/catch-reactive-form-errors';
import { MarkFormTouchedDirective } from '../../../lib/forms/mark-as-touched.directive';
import { TeamId } from '../../../lib/model/ids/team.id';
import { signalLoading } from '../../../lib/signal-loading';
import { singleNonNullable } from '../../../lib/single-non-nullable';
import { Team } from '../../model/team.model';
import { TeamService } from '../../team.service';
import { TeamContextService } from '../team-context.service';

@Component({
  selector: 'app-options',
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
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
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
        serverHttpError: serverHttpErrorToText(
          {
            404: 'Команда, которую Вы редактируете не найдена',
            403: 'Недостаточно прав для редактирования',
            409: 'Запись была изменена другим пользователем: скопируйте изменения и обновите страницу',
          },
          'Произошла непредвиденная ошибка сервера'
        ),
      },
    },
  ],
})
export class OptionsComponent implements OnInit {
  private readonly teamService = inject(TeamService);
  private readonly teamContext = inject(TeamContextService);
  private readonly notificationService = inject(NotificationService);
  private readonly fb = inject(FormBuilder).nonNullable;

  private teamId?: TeamId;
  private rowVersion?: string;

  isAdmin = toSignal(this.teamContext.isAdmin$);

  readonly loading = signal(false);

  readonly form = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(255)],
    ],
    description: ['', [Validators.maxLength(1000)]],
  });

  ngOnInit() {
    this.teamContext.team$
      .pipe(singleNonNullable())
      .subscribe((team) => this.updateForm(team));
  }

  submit() {
    if (!this.form.valid || !this.teamId || !this.rowVersion) {
      return;
    }
    
    this.teamService
      .updateTeam$(this.teamId, this.form.getRawValue(), this.rowVersion)
      .pipe(signalLoading(this.loading), catchReactiveFormError(this.form))
      .subscribe({
        next: (result) => {
          this.updateForm(result);
          this.notificationService.show('success', 'Команда успешно создана');
        },
        error: () => {
          this.notificationService.show(
            'error',
            'При изменении команды произошла ошибка'
          );
        },
      });
  }

  private updateForm(team: Team) {
    this.form.patchValue(team);
    this.form.markAsPristine();
    this.teamId = team.id;
    this.rowVersion = team.rowVersion;
  }
}
