/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { listTeamProjects$Json } from '../fn/team-projects/list-team-projects-json';
import { ListTeamProjects$Json$Params } from '../fn/team-projects/list-team-projects-json';
import { listTeamProjects$Plain } from '../fn/team-projects/list-team-projects-plain';
import { ListTeamProjects$Plain$Params } from '../fn/team-projects/list-team-projects-plain';
import { ProjectResponse as SpecBoxWebApiModelCommonProjectResponse } from '../models/SpecBox/WebApi/Model/Common/project-response';

@Injectable({ providedIn: 'root' })
export class ApiTeamProjectsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `listTeamProjects()` */
  static readonly ListTeamProjectsPath = '/teams/{teamId}/projects';

  /**
   * Список проектов команды.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listTeamProjects$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTeamProjects$Plain$Response(params: ListTeamProjects$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectResponse>>> {
    return listTeamProjects$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Список проектов команды.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listTeamProjects$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTeamProjects$Plain(params: ListTeamProjects$Plain$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelCommonProjectResponse>> {
    return this.listTeamProjects$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectResponse>>): Array<SpecBoxWebApiModelCommonProjectResponse> => r.body)
    );
  }

  /**
   * Список проектов команды.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listTeamProjects$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTeamProjects$Json$Response(params: ListTeamProjects$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectResponse>>> {
    return listTeamProjects$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Список проектов команды.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listTeamProjects$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTeamProjects$Json(params: ListTeamProjects$Json$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelCommonProjectResponse>> {
    return this.listTeamProjects$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectResponse>>): Array<SpecBoxWebApiModelCommonProjectResponse> => r.body)
    );
  }

}
