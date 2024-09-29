import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TuiButton, TuiError, TuiSurface, TuiTextfield } from '@taiga-ui/core';
import {
  TUI_VALIDATION_ERRORS,
  TuiButtonLoading,
  TuiFieldErrorPipe,
  TuiInputPassword,
  TuiTile,
} from '@taiga-ui/kit';
import { TuiCardLarge, TuiHeader, TuiMainComponent } from '@taiga-ui/layout';
import {
  catchReactiveFormError,
  serverHttpErrorToText,
} from '../../lib/catch-reactive-form-errors';
import { MarkFormTouchedDirective } from '../../lib/forms/mark-as-touched.directive';
import { signalLoading } from '../../lib/signal-loading';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiTextfield,
    TuiButton,
    TuiButtonLoading,
    TuiInputPassword,
    RouterLink,
    TuiCardLarge,
    TuiSurface,
    TuiHeader,
    TuiTile,
    TuiFieldErrorPipe,
    TuiError,
    AsyncPipe,
    TuiMainComponent,
    MarkFormTouchedDirective,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        serverHttpError: serverHttpErrorToText(
          {
            401: 'Неверный логин или пароль',
          },
          'Произошла непредвиденная ошибка, попробуйте позже'
        ),
      },
    },
  ],
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder).nonNullable;

  readonly form = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });
  readonly loading = signal(false);

  submit() {
    if (!this.form.valid) {
      return;
    }
    const { login, password } = this.form.getRawValue();

    this.authService
      .login$({ login, password })
      .pipe(signalLoading(this.loading), catchReactiveFormError(this.form))
      .subscribe(() => {
        this.router.navigate(['/profile']);
      });
  }
}
