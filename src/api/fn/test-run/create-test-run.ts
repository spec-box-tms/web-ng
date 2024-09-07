/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateTestRunModel as SpecBoxWebApiModelTestRunCreateTestRunModel } from '../../models/SpecBox/WebApi/Model/TestRun/create-test-run-model';

export interface CreateTestRun$Params {

/**
 * The project code.
 */
  project: string;

/**
 * The project version. Default version if not provided.
 */
  version?: string;
  
    /**
     * The object containing the test run data.
     */
    body?: SpecBoxWebApiModelTestRunCreateTestRunModel
}

export function createTestRun(http: HttpClient, rootUrl: string, params: CreateTestRun$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, createTestRun.PATH, 'post');
  if (params) {
    rb.path('project', params.project, {});
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

createTestRun.PATH = '/tests/projects/{project}/testruns';
