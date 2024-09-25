/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateTeamRequest as SpecBoxWebApiModelTeamsCreateTeamRequest } from '../../models/SpecBox/WebApi/Model/Teams/create-team-request';
import { TeamResponse as SpecBoxWebApiModelTeamsTeamResponse } from '../../models/SpecBox/WebApi/Model/Teams/team-response';

export interface CreateTeam$Plain$Params {
      body?: SpecBoxWebApiModelTeamsCreateTeamRequest
}

export function createTeam$Plain(http: HttpClient, rootUrl: string, params?: CreateTeam$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTeamsTeamResponse>> {
  const rb = new RequestBuilder(rootUrl, createTeam$Plain.PATH, 'post');
  if (params) {
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

createTeam$Plain.PATH = '/teams';
