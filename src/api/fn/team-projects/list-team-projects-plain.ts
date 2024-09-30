/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProjectResponse as SpecBoxWebApiModelCommonProjectResponse } from '../../models/SpecBox/WebApi/Model/Common/project-response';

export interface ListTeamProjects$Plain$Params {
  teamId: string;
}

export function listTeamProjects$Plain(http: HttpClient, rootUrl: string, params: ListTeamProjects$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectResponse>>> {
  const rb = new RequestBuilder(rootUrl, listTeamProjects$Plain.PATH, 'get');
  if (params) {
    rb.path('teamId', params.teamId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectResponse>>;
    })
  );
}

listTeamProjects$Plain.PATH = '/teams/{teamId}/projects';
