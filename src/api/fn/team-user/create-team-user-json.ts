/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateTeamUserRequest as SpecBoxWebApiModelTeamsCreateTeamUserRequest } from '../../models/SpecBox/WebApi/Model/Teams/create-team-user-request';
import { TeamUserResponse as SpecBoxWebApiModelTeamsTeamUserResponse } from '../../models/SpecBox/WebApi/Model/Teams/team-user-response';

export interface CreateTeamUser$Json$Params {
  teamId: string;
      body?: SpecBoxWebApiModelTeamsCreateTeamUserRequest
}

export function createTeamUser$Json(http: HttpClient, rootUrl: string, params: CreateTeamUser$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamUserResponse>> {
  const rb = new RequestBuilder(rootUrl, createTeamUser$Json.PATH, 'post');
  if (params) {
    rb.path('teamId', params.teamId, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelTeamsTeamUserResponse>;
    })
  );
}

createTeamUser$Json.PATH = '/teams/{teamId}/users';
