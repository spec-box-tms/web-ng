/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { login$Json } from '../fn/auth/login-json';
import { Login$Json$Params } from '../fn/auth/login-json';
import { login$Plain } from '../fn/auth/login-plain';
import { Login$Plain$Params } from '../fn/auth/login-plain';
import { refreshTokens$Json } from '../fn/auth/refresh-tokens-json';
import { RefreshTokens$Json$Params } from '../fn/auth/refresh-tokens-json';
import { refreshTokens$Plain } from '../fn/auth/refresh-tokens-plain';
import { RefreshTokens$Plain$Params } from '../fn/auth/refresh-tokens-plain';
import { register$Json } from '../fn/auth/register-json';
import { Register$Json$Params } from '../fn/auth/register-json';
import { register$Plain } from '../fn/auth/register-plain';
import { Register$Plain$Params } from '../fn/auth/register-plain';
import { AccessTokenResponse as SpecBoxWebApiModelAuthAccessTokenResponse } from '../models/SpecBox/WebApi/Model/Auth/access-token-response';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `register()` */
  static readonly RegisterPath = '/auth/register';

  /**
   * Регистрация новых пользователей.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  register$Plain$Response(params?: Register$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenResponse>> {
    return register$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Регистрация новых пользователей.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  register$Plain(params?: Register$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelAuthAccessTokenResponse> {
    return this.register$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenResponse>): SpecBoxWebApiModelAuthAccessTokenResponse => r.body)
    );
  }

  /**
   * Регистрация новых пользователей.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  register$Json$Response(params?: Register$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenResponse>> {
    return register$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Регистрация новых пользователей.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  register$Json(params?: Register$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelAuthAccessTokenResponse> {
    return this.register$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenResponse>): SpecBoxWebApiModelAuthAccessTokenResponse => r.body)
    );
  }

  /** Path part for operation `login()` */
  static readonly LoginPath = '/auth/login';

  /**
   * Аутентификация пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  login$Plain$Response(params?: Login$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenResponse>> {
    return login$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Аутентификация пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  login$Plain(params?: Login$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelAuthAccessTokenResponse> {
    return this.login$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenResponse>): SpecBoxWebApiModelAuthAccessTokenResponse => r.body)
    );
  }

  /**
   * Аутентификация пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  login$Json$Response(params?: Login$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenResponse>> {
    return login$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Аутентификация пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  login$Json(params?: Login$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelAuthAccessTokenResponse> {
    return this.login$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenResponse>): SpecBoxWebApiModelAuthAccessTokenResponse => r.body)
    );
  }

  /** Path part for operation `refreshTokens()` */
  static readonly RefreshTokensPath = '/auth/refresh';

  /**
   * Обновление токенов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refreshTokens$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  refreshTokens$Plain$Response(params?: RefreshTokens$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenResponse>> {
    return refreshTokens$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Обновление токенов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `refreshTokens$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  refreshTokens$Plain(params?: RefreshTokens$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelAuthAccessTokenResponse> {
    return this.refreshTokens$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenResponse>): SpecBoxWebApiModelAuthAccessTokenResponse => r.body)
    );
  }

  /**
   * Обновление токенов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refreshTokens$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  refreshTokens$Json$Response(params?: RefreshTokens$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenResponse>> {
    return refreshTokens$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Обновление токенов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `refreshTokens$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  refreshTokens$Json(params?: RefreshTokens$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelAuthAccessTokenResponse> {
    return this.refreshTokens$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenResponse>): SpecBoxWebApiModelAuthAccessTokenResponse => r.body)
    );
  }

}
