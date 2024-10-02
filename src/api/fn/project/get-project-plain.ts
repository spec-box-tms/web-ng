/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProjectResponse as SpecBoxWebApiModelCommonProjectResponse } from '../../models/SpecBox/WebApi/Model/Common/project-response';

export interface GetProject$Plain$Params {
  code: string;
}

export function getProject$Plain(http: HttpClient, rootUrl: string, params: GetProject$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelCommonProjectResponse>> {
  const rb = new RequestBuilder(rootUrl, getProject$Plain.PATH, 'get');
  if (params) {
    rb.path('code', params.code, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelCommonProjectResponse>;
    })
  );
}

getProject$Plain.PATH = '/projects/{code}';
