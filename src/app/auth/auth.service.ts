import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, of, switchMap, tap } from 'rxjs';
import { ApiAuthService } from '../../api/services';
import { JWT } from './model/jwt-token.model';
import { LoginModel } from './model/login.model';
import {
  mapTokenResponse,
  TokenResponseModel,
} from './model/token-response.model';
import { UserRegisterModel } from './model/user-register.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly refreshTokenKey = 'refresh-token';
  private readonly authHttp = inject(ApiAuthService);
  private readonly accessTokenExpireLag = 60 * 60 * 1000;
  private accessToken?: JWT;
  private readonly accessTokenSubject = new BehaviorSubject<string | null>(
    null
  );

  user$ = this.accessTokenSubject.pipe(
    map(() => this.accessToken?.unique_name || null)
  );

  accessToken$ = this.accessTokenSubject.pipe(
    switchMap((token) => {
      if (
        !token ||
        !this.accessToken ||
        this.accessToken.exp.getTime() - this.accessTokenExpireLag < Date.now()
      ) {
        try {
          return this.refresh$().pipe(map((tokens) => tokens.accessToken));
        } catch {
          return of(null);
        }
      }
      return of(token);
    })
  );

  isAuth$ = this.accessToken$.pipe(map((token) => token !== null));

  login$(model: LoginModel) {
    return this.authHttp.login$Json({ body: model }).pipe(
      map(mapTokenResponse),
      tap((tokens) => this.processTokens(tokens))
    );
  }

  register$(model: UserRegisterModel) {
    return this.authHttp.register$Json({ body: model }).pipe(
      map(mapTokenResponse),
      tap((tokens) => this.processTokens(tokens))
    );
  }

  refresh$() {
    const refreshToken = localStorage.getItem(this.refreshTokenKey);
    if (!refreshToken) {
      throw new Error('No refresh token');
    }
    return this.authHttp.refreshTokens$Json({ body: { refreshToken } }).pipe(
      map(mapTokenResponse),
      tap((tokens) => this.processTokens(tokens))
    );
  }

  private processTokens(tokens: TokenResponseModel) {
    this.accessTokenSubject.next(tokens.accessToken);
    this.accessToken = new JWT(tokens.accessToken);

    localStorage.setItem(this.refreshTokenKey, tokens.refreshToken);
  }
}
