/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateTeamUserRequest as SpecBoxWebApiModelTeamsCreateTeamUserRequest } from '../../models/SpecBox/WebApi/Model/Teams/create-team-user-request';
import { TeamUserResponse as SpecBoxWebApiModelTeamsTeamUserResponse } from '../../models/SpecBox/WebApi/Model/Teams/team-user-response';

export interface CreateTeamUser$Plain$Params {
  teamId: string;
      body?: SpecBoxWebApiModelTeamsCreateTeamUserRequest
}

export function createTeamUser$Plain(http: HttpClient, rootUrl: string, params: CreateTeamUser$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamUserResponse>> {
  const rb = new RequestBuilder(rootUrl, createTeamUser$Plain.PATH, 'post');
  if (params) {
    rb.path('teamId', params.teamId, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelTeamsTeamUserResponse>;
    })
  );
}

createTeamUser$Plain.PATH = '/teams/{teamId}/users';
