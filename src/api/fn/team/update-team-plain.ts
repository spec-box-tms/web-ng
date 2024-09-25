/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamResponse as SpecBoxWebApiModelTeamsTeamResponse } from '../../models/SpecBox/WebApi/Model/Teams/team-response';
import { UpdateTeamRequest as SpecBoxWebApiModelTeamsUpdateTeamRequest } from '../../models/SpecBox/WebApi/Model/Teams/update-team-request';

export interface UpdateTeam$Plain$Params {
  id: string;
      body?: SpecBoxWebApiModelTeamsUpdateTeamRequest
}

export function updateTeam$Plain(http: HttpClient, rootUrl: string, params: UpdateTeam$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>> {
  const rb = new RequestBuilder(rootUrl, updateTeam$Plain.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
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

updateTeam$Plain.PATH = '/teams/{id}';
