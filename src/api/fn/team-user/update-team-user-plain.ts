/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamUserResponse as SpecBoxWebApiModelTeamsTeamUserResponse } from '../../models/SpecBox/WebApi/Model/Teams/team-user-response';
import { UpdateTeamUserRequest as SpecBoxWebApiModelTeamsUpdateTeamUserRequest } from '../../models/SpecBox/WebApi/Model/Teams/update-team-user-request';

export interface UpdateTeamUser$Plain$Params {
  teamId: string;
  userLogin: string;
      body?: SpecBoxWebApiModelTeamsUpdateTeamUserRequest
}

export function updateTeamUser$Plain(http: HttpClient, rootUrl: string, params: UpdateTeamUser$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamUserResponse>> {
  const rb = new RequestBuilder(rootUrl, updateTeamUser$Plain.PATH, 'patch');
  if (params) {
    rb.path('teamId', params.teamId, {});
    rb.path('userLogin', params.userLogin, {});
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

updateTeamUser$Plain.PATH = '/teams/{teamId}/users/{userLogin}';
