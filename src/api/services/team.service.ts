/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createTeam$Json } from '../fn/team/create-team-json';
import { CreateTeam$Json$Params } from '../fn/team/create-team-json';
import { createTeam$Plain } from '../fn/team/create-team-plain';
import { CreateTeam$Plain$Params } from '../fn/team/create-team-plain';
import { deleteTeam$Json } from '../fn/team/delete-team-json';
import { DeleteTeam$Json$Params } from '../fn/team/delete-team-json';
import { deleteTeam$Plain } from '../fn/team/delete-team-plain';
import { DeleteTeam$Plain$Params } from '../fn/team/delete-team-plain';
import { listTeams$Json } from '../fn/team/list-teams-json';
import { ListTeams$Json$Params } from '../fn/team/list-teams-json';
import { listTeams$Plain } from '../fn/team/list-teams-plain';
import { ListTeams$Plain$Params } from '../fn/team/list-teams-plain';
import { TeamResponse as SpecBoxWebApiModelTeamsTeamResponse } from '../models/SpecBox/WebApi/Model/Teams/team-response';
import { updateTeam$Json } from '../fn/team/update-team-json';
import { UpdateTeam$Json$Params } from '../fn/team/update-team-json';
import { updateTeam$Plain } from '../fn/team/update-team-plain';
import { UpdateTeam$Plain$Params } from '../fn/team/update-team-plain';

@Injectable({ providedIn: 'root' })
export class TeamService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `listTeams()` */
  static readonly ListTeamsPath = '/teams';

  /**
   * Список команд авторизованного пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listTeams$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTeams$Plain$Response(params?: ListTeams$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelTeamsTeamResponse>>> {
    return listTeams$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Список команд авторизованного пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listTeams$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTeams$Plain(params?: ListTeams$Plain$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelTeamsTeamResponse>> {
    return this.listTeams$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelTeamsTeamResponse>>): Array<SpecBoxWebApiModelTeamsTeamResponse> => r.body)
    );
  }

  /**
   * Список команд авторизованного пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listTeams$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTeams$Json$Response(params?: ListTeams$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelTeamsTeamResponse>>> {
    return listTeams$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Список команд авторизованного пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listTeams$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTeams$Json(params?: ListTeams$Json$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelTeamsTeamResponse>> {
    return this.listTeams$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelTeamsTeamResponse>>): Array<SpecBoxWebApiModelTeamsTeamResponse> => r.body)
    );
  }

  /** Path part for operation `createTeam()` */
  static readonly CreateTeamPath = '/teams';

  /**
   * Создать команду.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTeam$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createTeam$Plain$Response(params?: CreateTeam$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>> {
    return createTeam$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Создать команду.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTeam$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createTeam$Plain(params?: CreateTeam$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTeamsTeamResponse> {
    return this.createTeam$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>): SpecBoxWebApiModelTeamsTeamResponse => r.body)
    );
  }

  /**
   * Создать команду.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTeam$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createTeam$Json$Response(params?: CreateTeam$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>> {
    return createTeam$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Создать команду.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTeam$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createTeam$Json(params?: CreateTeam$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTeamsTeamResponse> {
    return this.createTeam$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>): SpecBoxWebApiModelTeamsTeamResponse => r.body)
    );
  }

  /** Path part for operation `deleteTeam()` */
  static readonly DeleteTeamPath = '/teams/{id}';

  /**
   * Удалить команду.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTeam$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTeam$Plain$Response(params: DeleteTeam$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>> {
    return deleteTeam$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Удалить команду.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTeam$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTeam$Plain(params: DeleteTeam$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTeamsTeamResponse> {
    return this.deleteTeam$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>): SpecBoxWebApiModelTeamsTeamResponse => r.body)
    );
  }

  /**
   * Удалить команду.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTeam$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTeam$Json$Response(params: DeleteTeam$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>> {
    return deleteTeam$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Удалить команду.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTeam$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTeam$Json(params: DeleteTeam$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTeamsTeamResponse> {
    return this.deleteTeam$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>): SpecBoxWebApiModelTeamsTeamResponse => r.body)
    );
  }

  /** Path part for operation `updateTeam()` */
  static readonly UpdateTeamPath = '/teams/{id}';

  /**
   * Изменить команду.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTeam$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateTeam$Plain$Response(params: UpdateTeam$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>> {
    return updateTeam$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Изменить команду.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTeam$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateTeam$Plain(params: UpdateTeam$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTeamsTeamResponse> {
    return this.updateTeam$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>): SpecBoxWebApiModelTeamsTeamResponse => r.body)
    );
  }

  /**
   * Изменить команду.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTeam$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateTeam$Json$Response(params: UpdateTeam$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>> {
    return updateTeam$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Изменить команду.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTeam$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateTeam$Json(params: UpdateTeam$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTeamsTeamResponse> {
    return this.updateTeam$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>): SpecBoxWebApiModelTeamsTeamResponse => r.body)
    );
  }

}
