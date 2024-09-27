/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamResponse as SpecBoxWebApiModelTeamsTeamResponse } from '../../models/SpecBox/WebApi/Model/Teams/team-response';

export interface GetTeam$Plain$Params {
  id: string;
}

export function getTeam$Plain(http: HttpClient, rootUrl: string, params: GetTeam$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>> {
  const rb = new RequestBuilder(rootUrl, getTeam$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>;
    })
  );
}

getTeam$Plain.PATH = '/teams/{id}';
