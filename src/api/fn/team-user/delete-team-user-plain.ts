/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamUserResponse as SpecBoxWebApiModelTeamsTeamUserResponse } from '../../models/SpecBox/WebApi/Model/Teams/team-user-response';

export interface DeleteTeamUser$Plain$Params {
  teamId: string;
  userLogin: string;
}

export function deleteTeamUser$Plain(http: HttpClient, rootUrl: string, params: DeleteTeamUser$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamUserResponse>> {
  const rb = new RequestBuilder(rootUrl, deleteTeamUser$Plain.PATH, 'delete');
  if (params) {
    rb.path('teamId', params.teamId, {});
    rb.path('userLogin', params.userLogin, {});
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

deleteTeamUser$Plain.PATH = '/teams/{teamId}/users/{userLogin}';
