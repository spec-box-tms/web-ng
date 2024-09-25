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

@Injectable({ providedIn: 'root' })
export class ProfileService extends BaseService {
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

}
