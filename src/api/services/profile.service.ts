/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getProfile$Json } from '../fn/profile/get-profile-json';
import { GetProfile$Json$Params } from '../fn/profile/get-profile-json';
import { getProfile$Plain } from '../fn/profile/get-profile-plain';
import { GetProfile$Plain$Params } from '../fn/profile/get-profile-plain';
import { UserResponse as SpecBoxWebApiModelUsersUserResponse } from '../models/SpecBox/WebApi/Model/Users/user-response';
import { updateProfile$Json } from '../fn/profile/update-profile-json';
import { UpdateProfile$Json$Params } from '../fn/profile/update-profile-json';
import { updateProfile$Plain } from '../fn/profile/update-profile-plain';
import { UpdateProfile$Plain$Params } from '../fn/profile/update-profile-plain';

@Injectable({ providedIn: 'root' })
export class ApiProfileService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getProfile()` */
  static readonly GetProfilePath = '/profile';

  /**
   * Профиль пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfile$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfile$Plain$Response(params?: GetProfile$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelUsersUserResponse>> {
    return getProfile$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Профиль пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProfile$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfile$Plain(params?: GetProfile$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelUsersUserResponse> {
    return this.getProfile$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelUsersUserResponse>): SpecBoxWebApiModelUsersUserResponse => r.body)
    );
  }

  /**
   * Профиль пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfile$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfile$Json$Response(params?: GetProfile$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelUsersUserResponse>> {
    return getProfile$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Профиль пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProfile$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfile$Json(params?: GetProfile$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelUsersUserResponse> {
    return this.getProfile$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelUsersUserResponse>): SpecBoxWebApiModelUsersUserResponse => r.body)
    );
  }

  /** Path part for operation `updateProfile()` */
  static readonly UpdateProfilePath = '/profile';

  /**
   * Изменить профиль пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProfile$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateProfile$Plain$Response(params?: UpdateProfile$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelUsersUserResponse>> {
    return updateProfile$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Изменить профиль пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateProfile$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateProfile$Plain(params?: UpdateProfile$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelUsersUserResponse> {
    return this.updateProfile$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelUsersUserResponse>): SpecBoxWebApiModelUsersUserResponse => r.body)
    );
  }

  /**
   * Изменить профиль пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProfile$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateProfile$Json$Response(params?: UpdateProfile$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelUsersUserResponse>> {
    return updateProfile$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Изменить профиль пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateProfile$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateProfile$Json(params?: UpdateProfile$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelUsersUserResponse> {
    return this.updateProfile$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelUsersUserResponse>): SpecBoxWebApiModelUsersUserResponse => r.body)
    );
  }

}
