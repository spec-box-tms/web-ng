/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProjectResponse as SpecBoxWebApiModelCommonProjectResponse } from '../../models/SpecBox/WebApi/Model/Common/project-response';

export interface ListProjects$Json$Params {
}

export function listProjects$Json(http: HttpClient, rootUrl: string, params?: ListProjects$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectResponse>>> {
  const rb = new RequestBuilder(rootUrl, listProjects$Json.PATH, 'get');
  if (params) {
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

listProjects$Json.PATH = '/projects';
