import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TuiButton, TuiError, TuiSurface, TuiTextfield } from '@taiga-ui/core';
import { TuiButtonLoading, TuiInputPassword, TuiTile } from '@taiga-ui/kit';
import { TuiCardLarge, TuiHeader, TuiMainComponent } from '@taiga-ui/layout';
import { MarkFormTouchedDirective } from '../../lib/forms/mark-as-touched.directive';
import { HttpError } from '../../lib/http-errors/http-error';
import { processHttp } from '../../lib/process-http';
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
    RouterLink,
    TuiCardLarge,
    TuiSurface,
    TuiHeader,
    TuiTile,
    TuiError,
    TuiMainComponent,
    MarkFormTouchedDirective,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly httpError = signal<HttpError | null>(null);
  private readonly fb = inject(FormBuilder).nonNullable;

  readonly form = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });
  readonly loading = signal(false);
  readonly error = computed(() => {
    const httpError = this.httpError();
    if (httpError) {
      if (httpError.status === 401) {
        return 'Неверный логин или пароль';
      } else {
        return 'Произошла непредвиденная ошибка, попробуйте позже';
      }
    }
    return null;
  });

  submit() {
    if (!this.form.valid) {
      return;
    }
    const { login, password } = this.form.getRawValue();

    this.authService
      .login$({ login, password })
      .pipe(processHttp(this.loading, this.httpError))
      .subscribe((result) => {
        if (result) {
          this.router.navigate(['/team']);
        }
      });
  }
}
