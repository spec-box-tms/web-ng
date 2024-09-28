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
import { filter, take } from 'rxjs';
import { NotificationService } from '../../../core/notification.service';
import { MarkFormTouchedDirective } from '../../../lib/forms/mark-as-touched.directive';
import { HttpError } from '../../../lib/http-errors/http-error';
import { TeamId } from '../../../lib/model/ids/team.id';
import { processHttp } from '../../../lib/process-http';
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
      },
    },
  ],
})
export class OptionsComponent implements OnInit {
  private readonly teamService = inject(TeamService);
  private readonly teamContext = inject(TeamContextService);
  private readonly notificationService = inject(NotificationService);
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly httpError = signal<HttpError | null>(null);

  private teamId?: TeamId;
  private rowVersion?: string;

  isAdmin = toSignal(this.teamContext.isAdmin$);

  readonly loading = signal(false);

  readonly form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(255)]],
    description: [''],
  });

  ngOnInit() {
    this.teamContext.team$
      .pipe(
        filter((team) => !!team),
        take(1)
      )
      .subscribe((team) => {
        this.form.patchValue(team);
        this.teamId = team.id;
        this.rowVersion = team.rowVersion;
      });
  }

  submit() {
    if (!this.form.valid || !this.teamId || !this.rowVersion) {
      return;
    }
    const { title, description } = this.form.getRawValue();

    this.teamService
      .updateTeam$(this.teamId, title, description, this.rowVersion)
      .pipe(processHttp(this.loading, this.httpError))
      .subscribe((result) => {
        if (result) {
          this.notificationService.show('success', 'Команда успешно создана');
        } else {
          this.notificationService.show(
            'error',
            'При изменении команды произошла ошибка'
          );
        }
      });
  }
}
