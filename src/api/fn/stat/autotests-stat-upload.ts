/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AutotestsStatUploadData as SpecBoxWebApiModelStatAutotestsStatUploadData } from '../../models/SpecBox/WebApi/Model/Stat/autotests-stat-upload-data';

export interface AutotestsStatUpload$Params {
  project?: string;
  version?: string;
      body?: SpecBoxWebApiModelStatAutotestsStatUploadData
}

export function autotestsStatUpload(http: HttpClient, rootUrl: string, params?: AutotestsStatUpload$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, autotestsStatUpload.PATH, 'post');
  if (params) {
    rb.query('project', params.project, {});
    rb.query('version', params.version, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

autotestsStatUpload.PATH = '/stat/upload-autotests';
