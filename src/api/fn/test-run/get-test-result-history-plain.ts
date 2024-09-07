/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TestResultHistoryModel as SpecBoxWebApiModelTestRunTestResultHistoryModel } from '../../models/SpecBox/WebApi/Model/TestRun/test-result-history-model';

export interface GetTestResultHistory$Plain$Params {

/**
 * The ID of the test run.
 */
  testRunId: string;

/**
 * The ID of the test result.
 */
  testResultId: string;
}

export function getTestResultHistory$Plain(http: HttpClient, rootUrl: string, params: GetTestResultHistory$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelTestRunTestResultHistoryModel>>> {
  const rb = new RequestBuilder(rootUrl, getTestResultHistory$Plain.PATH, 'get');
  if (params) {
    rb.path('testRunId', params.testRunId, {});
    rb.path('testResultId', params.testResultId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SpecBoxWebApiModelTestRunTestResultHistoryModel>>;
    })
  );
}

getTestResultHistory$Plain.PATH = '/tests/testruns/{testRunId}/testresults/{testResultId}/history';
