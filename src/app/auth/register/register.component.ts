import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  TuiButton,
  TuiError,
  TuiIcon,
  TuiLabel,
  TuiSurface,
  TuiTextfield,
} from '@taiga-ui/core';
import {
  TUI_VALIDATION_ERRORS,
  TuiButtonLoading,
  TuiFieldErrorPipe,
  TuiInputPassword,
  TuiTile,
  TuiTooltip,
} from '@taiga-ui/kit';
import { TuiCardLarge, TuiHeader, TuiMainComponent } from '@taiga-ui/layout';
import {
  catchReactiveFormError,
  serverValidationErrorsToText,
} from '../../lib/catch-reactive-form-errors';
import { MarkFormTouchedDirective } from '../../lib/forms/mark-as-touched.directive';
import { signalLoading } from '../../lib/signal-loading';
import {
  loginValidator,
  loginValidatorText,
} from '../../lib/validators/login.validator';
import { passwordMatchValidator } from '../../lib/validators/password-match.validator';
import {
  passwordValidator,
  passwordValidatorToText,
} from '../../lib/validators/password.validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiLabel,
    TuiTextfield,
    TuiButton,
    TuiButtonLoading,
    TuiInputPassword,
    TuiFieldErrorPipe,
    TuiError,
    AsyncPipe,
    TuiIcon,
    TuiTooltip,
    RouterLink,
    TuiCardLarge,
    TuiSurface,
    TuiHeader,
    TuiTile,
    TuiMainComponent,
    MarkFormTouchedDirective,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
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
        password: passwordValidatorToText,
        passwordMatch: 'Пароли не совпадают',
        loginExists: 'Пользователь с таким логином уже существует',
        pattern: 'Неверный формат',
        login: loginValidatorText,
        emailExists: 'Пользователь с такой почтой уже существует',
        serverValidationErrors: serverValidationErrorsToText({
          required: 'Обязательное поле',
          'The field Login must match the regular expression':
            'Только латинские символы, цифры или знак подчеркивания',
          'The field Login must be a string or array type with a maximum length':
            'Превышена максимальная длина поля',
          'Login already exists': 'Пользователь с таким логином уже существует',
          'Email already exists': 'Пользователь с такой почтой уже существует',
        }),
        serverHttpError: 'Произошла непредвиденная ошибка, попробуйте позже',
      },
    },
  ],
})
export class RegisterComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  private readonly fb = inject(FormBuilder).nonNullable;
  readonly form = this.fb.group({
    login: [
      '',
      [Validators.required, Validators.maxLength(255), loginValidator],
    ],
    email: [
      '',
      [Validators.required, Validators.email, Validators.maxLength(255)],
    ],
    name: ['', [Validators.required, Validators.maxLength(255)]],
    password: [
      '',
      [Validators.required, Validators.maxLength(30), passwordValidator],
    ],
    confirm: [''],
  });
  readonly loading = signal(false);

  ngOnInit(): void {
    this.form.controls.confirm.setValidators(
      passwordMatchValidator(this.form.controls.password)
    );
  }

  submit() {
    if (!this.form.valid) {
      return;
    }
    const { login, email, name, password } = this.form.getRawValue();

    this.authService
      .register$({ login, email, name, password })
      .pipe(signalLoading(this.loading), catchReactiveFormError(this.form))
      .subscribe(() => {
        this.router.navigate(['/profile']);
      });
  }
}
