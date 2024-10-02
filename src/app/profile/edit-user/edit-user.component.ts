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
import { TuiButton, TuiError, TuiLabel, TuiTextfield } from '@taiga-ui/core';
import {
  TUI_VALIDATION_ERRORS,
  TuiButtonLoading,
  TuiFieldErrorPipe,
  TuiSkeleton,
} from '@taiga-ui/kit';
import { singleNonNullable } from '../../lib/single-non-nullable';
import { ProfileService } from '../profile.service';
import {
  TuiTextareaModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import { MarkFormTouchedDirective } from '../../lib/forms/mark-as-touched.directive';
import { User } from '../../model/user.model';
import {
  catchReactiveFormError,
  serverHttpErrorToText,
  serverValidationErrorsToText,
} from '../../lib/catch-reactive-form-errors';
import { signalLoading } from '../../lib/signal-loading';
import { NotificationService } from '../../core/notification.service';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    TuiSkeleton,
    ReactiveFormsModule,
    TuiLabel,
    TuiTextfield,
    TuiButton,
    TuiButtonLoading,
    TuiError,
    AsyncPipe,
    TuiFieldErrorPipe,
    TuiTextareaModule,
    TuiTextfieldControllerModule,
    MarkFormTouchedDirective,
  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Обязательное поле',
        email: 'Введите адрес электронной почты',
        maxlength: ({ requiredLength }: { requiredLength: string }) =>
          `Максимальная длина — ${requiredLength}`,
        minlength: ({ requiredLength }: { requiredLength: string }) =>
          `Минимальная длина — ${requiredLength}`,
        emailExists: 'Пользователь с такой почтой уже существует',
        serverValidationErrors: serverValidationErrorsToText({}),
        serverHttpError: serverHttpErrorToText(
          {
            409: 'Запись была изменена другим пользователем: скопируйте изменения и обновите страницу',
          },
          'Произошла непредвиденная ошибка сервера'
        ),
      },
    },
  ],
})
export class EditUserComponent implements OnInit {
  private profileService = inject(ProfileService);
  private notificationService = inject(NotificationService);
  private rowVersion?: string;

  profile$ = this.profileService.profile$;
  user = toSignal(this.profile$);
  loading = signal(false);

  private readonly fb = inject(FormBuilder).nonNullable;
  readonly form = this.fb.group({
    email: [
      '',
      [Validators.required, Validators.email, Validators.maxLength(255)],
    ],
    name: ['', [Validators.required, Validators.maxLength(255)]],
    description: ['', [Validators.maxLength(300)]],
  });

  ngOnInit() {
    this.profile$
      .pipe(singleNonNullable())
      .subscribe((userProfile) => this.updateForm(userProfile));
  }

  saveChanges() {
    if (!this.form.valid || !this.rowVersion) {
      return;
    }

    this.profileService
      .update$(this.form.getRawValue(), this.rowVersion)
      .pipe(signalLoading(this.loading), catchReactiveFormError(this.form))
      .subscribe({
        next: (userProfile) => {
          this.updateForm(userProfile);
          this.notificationService.show('success', 'Профиль успешно обновлен');
        },
        error: () => {
          this.notificationService.show(
            'error',
            'Произошла ошибка при обновлении профиля'
          );
        },
      });
  }

  private updateForm(userProfile: User) {
    this.form.patchValue(userProfile);
    this.rowVersion = userProfile.rowVersion;
  }
}
