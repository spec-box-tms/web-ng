import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
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
import { MarkFormTouchedDirective } from '../../lib/forms/mark-as-touched.directive';
import { hasBadRequestError } from '../../lib/http-errors/http-bad-request-details';
import { HttpError } from '../../lib/http-errors/http-error';
import { processHttp } from '../../lib/process-http';
import { passwordMatchValidator } from '../../lib/validators/password-match.validator';
import {
  passwordValidator,
  passwordValidatorToText,
} from '../../lib/validators/password.validator';
import { LogoComponent } from '../../project/navigation/logo/logo.component';
import { AuthService } from '../auth.service';

const LOGIN_PATTERN = /^[a-zA-Z_]+[a-zA-Z\d-_]*$/;

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
    LogoComponent,
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
        emailExists: 'Пользователь с такой почтой уже существует',
      },
    },
  ],
})
export class RegisterComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly httpError = signal<HttpError | null>(null);

  private readonly fb = inject(FormBuilder).nonNullable;
  readonly form = this.fb.group({
    login: [
      '',
      [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern(LOGIN_PATTERN),
      ],
    ],
    email: [
      '',
      [Validators.required, Validators.email, Validators.maxLength(255)],
    ],
    name: [
      '',
      [
        Validators.required,
        Validators.maxLength(255),
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.maxLength(30), passwordValidator],
    ],
    confirm: [''],
  });
  readonly loading = signal(false);
  readonly unknownError = computed(() => {
    const httpError = this.httpError();
    if (httpError) {
      if (httpError.status === 400) {
        return null;
      }
      return 'Произошла непредвиденная ошибка, попробуйте позже';
    }
    return null;
  });

  constructor() {
    effect(() => {
      const httpError = this.httpError();
      if (httpError && httpError.knownError?.status === 400) {
        const error = httpError.knownError;
        if (hasBadRequestError(error, 'login', 'exists')) {
          this.form.controls.login.setErrors({
            loginExists: true,
          });
        }
        if (hasBadRequestError(error, 'login', 'match')) {
          this.form.controls.login.setErrors({
            pattern: true,
          });
        }
        if (hasBadRequestError(error, 'email', 'exists')) {
          this.form.controls.email.setErrors({
            emailExists: true,
          });
        }
        if (hasBadRequestError(error, 'email', 'match')) {
          this.form.controls.email.setErrors({
            pattern: true,
          });
        }
      }
    });
  }

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
      .pipe(processHttp(this.loading, this.httpError))
      .subscribe((result) => {
        if (result) {
          this.router.navigate(['/project']);
        }
      });
  }
}
