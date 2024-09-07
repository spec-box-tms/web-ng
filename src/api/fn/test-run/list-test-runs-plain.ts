/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProjectTestRunsModel as SpecBoxWebApiModelTestRunProjectTestRunsModel } from '../../models/SpecBox/WebApi/Model/TestRun/project-test-runs-model';

export interface ListTestRuns$Plain$Params {

/**
 * The project code for which to retrieve the test runs.
 */
  project: string;

/**
 * The project version. Default version if not provided.
 */
  version?: string;
}

export function listTestRuns$Plain(http: HttpClient, rootUrl: string, params: ListTestRuns$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTestRunProjectTestRunsModel>> {
  const rb = new RequestBuilder(rootUrl, listTestRuns$Plain.PATH, 'get');
  if (params) {
    rb.path('project', params.project, {});
    rb.query('version', params.version, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelTestRunProjectTestRunsModel>;
    })
  );
}

listTestRuns$Plain.PATH = '/tests/projects/{project}/testruns';
