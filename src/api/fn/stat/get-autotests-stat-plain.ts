/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StatModel as SpecBoxWebApiModelStatStatModel } from '../../models/SpecBox/WebApi/Model/Stat/stat-model';

export interface GetAutotestsStat$Plain$Params {
  project?: string;
  from?: string;
  to?: string;
  version?: string;
}

export function getAutotestsStat$Plain(http: HttpClient, rootUrl: string, params?: GetAutotestsStat$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelStatStatModel>> {
  const rb = new RequestBuilder(rootUrl, getAutotestsStat$Plain.PATH, 'get');
  if (params) {
    rb.query('project', params.project, {});
    rb.query('from', params.from, {});
    rb.query('to', params.to, {});
    rb.query('version', params.version, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelStatStatModel>;
    })
  );
}

getAutotestsStat$Plain.PATH = '/stat';
