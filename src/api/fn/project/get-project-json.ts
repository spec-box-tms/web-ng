/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProjectResponse as SpecBoxWebApiModelCommonProjectResponse } from '../../models/SpecBox/WebApi/Model/Common/project-response';

export interface GetProject$Json$Params {
  code: string;
}

export function getProject$Json(http: HttpClient, rootUrl: string, params: GetProject$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelCommonProjectResponse>> {
  const rb = new RequestBuilder(rootUrl, getProject$Json.PATH, 'get');
  if (params) {
    rb.path('code', params.code, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelCommonProjectResponse>;
    })
  );
}

getProject$Json.PATH = '/projects/{code}';
