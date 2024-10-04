/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UploadData as SpecBoxWebApiModelUploadUploadData } from '../../models/SpecBox/WebApi/Model/Upload/upload-data';

export interface ExportUploadProjectVersionsVersionPost$Params {

/**
 * The project code
 */
  project: string;

/**
 * Optional project version
 */
  version: string;
  
    /**
     * Data to be updated
     */
    body?: SpecBoxWebApiModelUploadUploadData
}

export function exportUploadProjectVersionsVersionPost(http: HttpClient, rootUrl: string, params: ExportUploadProjectVersionsVersionPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, exportUploadProjectVersionsVersionPost.PATH, 'post');
  if (params) {
    rb.path('project', params.project, {});
    rb.path('version', params.version, {});
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

exportUploadProjectVersionsVersionPost.PATH = '/export/upload/{project}/versions/{version}';
