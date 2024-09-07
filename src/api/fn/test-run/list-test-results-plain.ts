/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TestResultModel as SpecBoxWebApiModelTestRunTestResultModel } from '../../models/SpecBox/WebApi/Model/TestRun/test-result-model';

export interface ListTestResults$Plain$Params {

/**
 * The ID of the test run.
 */
  testRunId: string;
}

export function listTestResults$Plain(http: HttpClient, rootUrl: string, params: ListTestResults$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelTestRunTestResultModel>>> {
  const rb = new RequestBuilder(rootUrl, listTestResults$Plain.PATH, 'get');
  if (params) {
    rb.path('testRunId', params.testRunId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SpecBoxWebApiModelTestRunTestResultModel>>;
    })
  );
}

listTestResults$Plain.PATH = '/tests/testruns/{testRunId}/testresults';
