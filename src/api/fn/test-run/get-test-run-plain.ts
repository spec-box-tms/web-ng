/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TestRunDetailsModel as SpecBoxWebApiModelTestRunTestRunDetailsModel } from '../../models/SpecBox/WebApi/Model/TestRun/test-run-details-model';

export interface GetTestRun$Plain$Params {

/**
 * Test run ID
 */
  testRunId: string;
}

export function getTestRun$Plain(http: HttpClient, rootUrl: string, params: GetTestRun$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTestRunTestRunDetailsModel>> {
  const rb = new RequestBuilder(rootUrl, getTestRun$Plain.PATH, 'get');
  if (params) {
    rb.path('testRunId', params.testRunId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelTestRunTestRunDetailsModel>;
    })
  );
}

getTestRun$Plain.PATH = '/tests/testruns/{testRunId}';
