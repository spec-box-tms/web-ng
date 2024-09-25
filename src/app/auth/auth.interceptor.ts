/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, switchMap, take, throwError } from 'rxjs';
import { ApiConfiguration } from '../../api/api-configuration';
import { AUTH_BYPASS } from '../utils/provide-auth-bypass';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private authService = inject(AuthService);
  private authBypass = inject(AUTH_BYPASS);
  private apiConfigurationService = inject(ApiConfiguration);
  private apiUrl = this.apiConfigurationService.rootUrl;

  constructor() {
    console.log('interceptor created');
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const bypass = this.authBypass.some((endpoint) => {
      return request.url.startsWith(`${this.apiUrl}${endpoint}`);
    });

    console.log('Interceptor', request.url);
    if (bypass) {
      return next.handle(request);
    }

    return this.authService.accessToken$.pipe(
      take(1),
      switchMap((accessToken) => {
        if (accessToken === null) {
          return throwError(() => new Error('No access token'));
        }

        const requestClone = request.clone({
          headers: request.headers.set(
            'Authorization',
            `Bearer ${accessToken}`
          ),
        });

        return next.handle(requestClone);
      })
    );
  }
}
