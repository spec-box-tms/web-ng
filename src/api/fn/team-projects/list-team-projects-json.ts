/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProjectResponse as SpecBoxWebApiModelCommonProjectResponse } from '../../models/SpecBox/WebApi/Model/Common/project-response';

export interface ListTeamProjects$Json$Params {
  teamId: string;
}

export function listTeamProjects$Json(http: HttpClient, rootUrl: string, params: ListTeamProjects$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectResponse>>> {
  const rb = new RequestBuilder(rootUrl, listTeamProjects$Json.PATH, 'get');
  if (params) {
    rb.path('teamId', params.teamId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectResponse>>;
    })
  );
}

listTeamProjects$Json.PATH = '/teams/{teamId}/projects';
