/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createTeamUser$Json } from '../fn/team-user/create-team-user-json';
import { CreateTeamUser$Json$Params } from '../fn/team-user/create-team-user-json';
import { createTeamUser$Plain } from '../fn/team-user/create-team-user-plain';
import { CreateTeamUser$Plain$Params } from '../fn/team-user/create-team-user-plain';
import { deleteTeamUser } from '../fn/team-user/delete-team-user';
import { DeleteTeamUser$Params } from '../fn/team-user/delete-team-user';
import { listTeamUsers$Json } from '../fn/team-user/list-team-users-json';
import { ListTeamUsers$Json$Params } from '../fn/team-user/list-team-users-json';
import { listTeamUsers$Plain } from '../fn/team-user/list-team-users-plain';
import { ListTeamUsers$Plain$Params } from '../fn/team-user/list-team-users-plain';
import { TeamUserResponse as SpecBoxWebApiModelTeamsTeamUserResponse } from '../models/SpecBox/WebApi/Model/Teams/team-user-response';
import { updateTeamUser$Json } from '../fn/team-user/update-team-user-json';
import { UpdateTeamUser$Json$Params } from '../fn/team-user/update-team-user-json';
import { updateTeamUser$Plain } from '../fn/team-user/update-team-user-plain';
import { UpdateTeamUser$Plain$Params } from '../fn/team-user/update-team-user-plain';

@Injectable({ providedIn: 'root' })
export class ApiTeamUserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `listTeamUsers()` */
  static readonly ListTeamUsersPath = '/teams/{teamId}/users';

  /**
   * Список пользователей команды.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listTeamUsers$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTeamUsers$Plain$Response(params: ListTeamUsers$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelTeamsTeamUserResponse>>> {
    return listTeamUsers$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Список пользователей команды.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listTeamUsers$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTeamUsers$Plain(params: ListTeamUsers$Plain$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelTeamsTeamUserResponse>> {
    return this.listTeamUsers$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelTeamsTeamUserResponse>>): Array<SpecBoxWebApiModelTeamsTeamUserResponse> => r.body)
    );
  }

  /**
   * Список пользователей команды.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listTeamUsers$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTeamUsers$Json$Response(params: ListTeamUsers$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelTeamsTeamUserResponse>>> {
    return listTeamUsers$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Список пользователей команды.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listTeamUsers$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTeamUsers$Json(params: ListTeamUsers$Json$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelTeamsTeamUserResponse>> {
    return this.listTeamUsers$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelTeamsTeamUserResponse>>): Array<SpecBoxWebApiModelTeamsTeamUserResponse> => r.body)
    );
  }

  /** Path part for operation `createTeamUser()` */
  static readonly CreateTeamUserPath = '/teams/{teamId}/users';

  /**
   * Добавить пользователя в команду.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTeamUser$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createTeamUser$Plain$Response(params: CreateTeamUser$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamUserResponse>> {
    return createTeamUser$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Добавить пользователя в команду.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTeamUser$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createTeamUser$Plain(params: CreateTeamUser$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTeamsTeamUserResponse> {
    return this.createTeamUser$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTeamsTeamUserResponse>): SpecBoxWebApiModelTeamsTeamUserResponse => r.body)
    );
  }

  /**
   * Добавить пользователя в команду.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTeamUser$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createTeamUser$Json$Response(params: CreateTeamUser$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamUserResponse>> {
    return createTeamUser$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Добавить пользователя в команду.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTeamUser$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createTeamUser$Json(params: CreateTeamUser$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTeamsTeamUserResponse> {
    return this.createTeamUser$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTeamsTeamUserResponse>): SpecBoxWebApiModelTeamsTeamUserResponse => r.body)
    );
  }

  /** Path part for operation `deleteTeamUser()` */
  static readonly DeleteTeamUserPath = '/teams/{teamId}/users/{userLogin}';

  /**
   * Удалить пользователя команды.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTeamUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTeamUser$Response(params: DeleteTeamUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteTeamUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Удалить пользователя команды.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTeamUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTeamUser(params: DeleteTeamUser$Params, context?: HttpContext): Observable<void> {
    return this.deleteTeamUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `updateTeamUser()` */
  static readonly UpdateTeamUserPath = '/teams/{teamId}/users/{userLogin}';

  /**
   * Изменить пользователя команды.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTeamUser$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateTeamUser$Plain$Response(params: UpdateTeamUser$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamUserResponse>> {
    return updateTeamUser$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Изменить пользователя команды.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTeamUser$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateTeamUser$Plain(params: UpdateTeamUser$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTeamsTeamUserResponse> {
    return this.updateTeamUser$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTeamsTeamUserResponse>): SpecBoxWebApiModelTeamsTeamUserResponse => r.body)
    );
  }

  /**
   * Изменить пользователя команды.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTeamUser$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateTeamUser$Json$Response(params: UpdateTeamUser$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamUserResponse>> {
    return updateTeamUser$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Изменить пользователя команды.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTeamUser$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateTeamUser$Json(params: UpdateTeamUser$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTeamsTeamUserResponse> {
    return this.updateTeamUser$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTeamsTeamUserResponse>): SpecBoxWebApiModelTeamsTeamUserResponse => r.body)
    );
  }

}
