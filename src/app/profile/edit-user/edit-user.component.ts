import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiButton, TuiError, TuiLabel, TuiTextfield } from '@taiga-ui/core';
import {
  TUI_VALIDATION_ERRORS,
  TuiFieldErrorPipe,
  TuiSkeleton,
} from '@taiga-ui/kit';
import { ProfileService } from '../profile.service';
import { filter, take } from 'rxjs';
import { singleNonNullable } from '../../lib/single-non-nullable';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    TuiSkeleton,
    ReactiveFormsModule,
    TuiLabel,
    TuiTextfield,
    TuiButton,
    TuiError,
    AsyncPipe,
    TuiFieldErrorPipe,
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
      },
    },
  ],
})
export class EditUserComponent implements OnInit {
  private profileService = inject(ProfileService);

  profile$ = this.profileService.profile$;
  user = toSignal(this.profile$);

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
    this.profile$.pipe(singleNonNullable())
      .subscribe((userProfile) => {
        this.form.patchValue(userProfile);
      });
  }
}
