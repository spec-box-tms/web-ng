/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TestResultModel as SpecBoxWebApiModelTestRunTestResultModel } from '../../models/SpecBox/WebApi/Model/TestRun/test-result-model';

export interface GetTestResult$Plain$Params {

/**
 * The ID of the test run.
 */
  testRunId: string;

/**
 * The ID of the test result.
 */
  testResultId: string;
}

export function getTestResult$Plain(http: HttpClient, rootUrl: string, params: GetTestResult$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTestRunTestResultModel>> {
  const rb = new RequestBuilder(rootUrl, getTestResult$Plain.PATH, 'get');
  if (params) {
    rb.path('testRunId', params.testRunId, {});
    rb.path('testResultId', params.testResultId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelTestRunTestResultModel>;
    })
  );
}

getTestResult$Plain.PATH = '/tests/testruns/{testRunId}/testresults/{testResultId}';
