/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamResponse as SpecBoxWebApiModelTeamsTeamResponse } from '../../models/SpecBox/WebApi/Model/Teams/team-response';

export interface ListTeams$Json$Params {
}

export function listTeams$Json(http: HttpClient, rootUrl: string, params?: ListTeams$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelTeamsTeamResponse>>> {
  const rb = new RequestBuilder(rootUrl, listTeams$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SpecBoxWebApiModelTeamsTeamResponse>>;
    })
  );
}

listTeams$Json.PATH = '/teams';
