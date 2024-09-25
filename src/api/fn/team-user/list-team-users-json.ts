/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamUserResponse as SpecBoxWebApiModelTeamsTeamUserResponse } from '../../models/SpecBox/WebApi/Model/Teams/team-user-response';

export interface ListTeamUsers$Json$Params {
  teamId: string;
}

export function listTeamUsers$Json(http: HttpClient, rootUrl: string, params: ListTeamUsers$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamUserResponse>> {
  const rb = new RequestBuilder(rootUrl, listTeamUsers$Json.PATH, 'get');
  if (params) {
    rb.path('teamId', params.teamId, {});
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

listTeamUsers$Json.PATH = '/teams/{teamId}/users';
