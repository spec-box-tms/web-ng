/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { completeTestRun$Json } from '../fn/test-run/complete-test-run-json';
import { CompleteTestRun$Json$Params } from '../fn/test-run/complete-test-run-json';
import { completeTestRun$Plain } from '../fn/test-run/complete-test-run-plain';
import { CompleteTestRun$Plain$Params } from '../fn/test-run/complete-test-run-plain';
import { createTestRun } from '../fn/test-run/create-test-run';
import { CreateTestRun$Params } from '../fn/test-run/create-test-run';
import { deleteTestRun } from '../fn/test-run/delete-test-run';
import { DeleteTestRun$Params } from '../fn/test-run/delete-test-run';
import { getTestResult$Json } from '../fn/test-run/get-test-result-json';
import { GetTestResult$Json$Params } from '../fn/test-run/get-test-result-json';
import { getTestResult$Plain } from '../fn/test-run/get-test-result-plain';
import { GetTestResult$Plain$Params } from '../fn/test-run/get-test-result-plain';
import { getTestResultHistory$Json } from '../fn/test-run/get-test-result-history-json';
import { GetTestResultHistory$Json$Params } from '../fn/test-run/get-test-result-history-json';
import { getTestResultHistory$Plain } from '../fn/test-run/get-test-result-history-plain';
import { GetTestResultHistory$Plain$Params } from '../fn/test-run/get-test-result-history-plain';
import { getTestRun$Json } from '../fn/test-run/get-test-run-json';
import { GetTestRun$Json$Params } from '../fn/test-run/get-test-run-json';
import { getTestRun$Plain } from '../fn/test-run/get-test-run-plain';
import { GetTestRun$Plain$Params } from '../fn/test-run/get-test-run-plain';
import { listTestResults$Json } from '../fn/test-run/list-test-results-json';
import { ListTestResults$Json$Params } from '../fn/test-run/list-test-results-json';
import { listTestResults$Plain } from '../fn/test-run/list-test-results-plain';
import { ListTestResults$Plain$Params } from '../fn/test-run/list-test-results-plain';
import { listTestRuns$Json } from '../fn/test-run/list-test-runs-json';
import { ListTestRuns$Json$Params } from '../fn/test-run/list-test-runs-json';
import { listTestRuns$Plain } from '../fn/test-run/list-test-runs-plain';
import { ListTestRuns$Plain$Params } from '../fn/test-run/list-test-runs-plain';
import { ProjectTestRunsModel as SpecBoxWebApiModelTestRunProjectTestRunsModel } from '../models/SpecBox/WebApi/Model/TestRun/project-test-runs-model';
import { TestResultHistoryModel as SpecBoxWebApiModelTestRunTestResultHistoryModel } from '../models/SpecBox/WebApi/Model/TestRun/test-result-history-model';
import { TestResultModel as SpecBoxWebApiModelTestRunTestResultModel } from '../models/SpecBox/WebApi/Model/TestRun/test-result-model';
import { TestRunDetailsModel as SpecBoxWebApiModelTestRunTestRunDetailsModel } from '../models/SpecBox/WebApi/Model/TestRun/test-run-details-model';
import { updateTestResult$Json } from '../fn/test-run/update-test-result-json';
import { UpdateTestResult$Json$Params } from '../fn/test-run/update-test-result-json';
import { updateTestResult$Plain } from '../fn/test-run/update-test-result-plain';
import { UpdateTestResult$Plain$Params } from '../fn/test-run/update-test-result-plain';

@Injectable({ providedIn: 'root' })
export class TestRunService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `listTestRuns()` */
  static readonly ListTestRunsPath = '/tests/projects/{project}/testruns';

  /**
   * Retrieves a list of test runs for a specific project from the database.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listTestRuns$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTestRuns$Plain$Response(params: ListTestRuns$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTestRunProjectTestRunsModel>> {
    return listTestRuns$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieves a list of test runs for a specific project from the database.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listTestRuns$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTestRuns$Plain(params: ListTestRuns$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTestRunProjectTestRunsModel> {
    return this.listTestRuns$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTestRunProjectTestRunsModel>): SpecBoxWebApiModelTestRunProjectTestRunsModel => r.body)
    );
  }

  /**
   * Retrieves a list of test runs for a specific project from the database.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listTestRuns$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTestRuns$Json$Response(params: ListTestRuns$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTestRunProjectTestRunsModel>> {
    return listTestRuns$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieves a list of test runs for a specific project from the database.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listTestRuns$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTestRuns$Json(params: ListTestRuns$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTestRunProjectTestRunsModel> {
    return this.listTestRuns$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTestRunProjectTestRunsModel>): SpecBoxWebApiModelTestRunProjectTestRunsModel => r.body)
    );
  }

  /** Path part for operation `createTestRun()` */
  static readonly CreateTestRunPath = '/tests/projects/{project}/testruns';

  /**
   * Creates a new test run for the specified project.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTestRun()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createTestRun$Response(params: CreateTestRun$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return createTestRun(this.http, this.rootUrl, params, context);
  }

  /**
   * Creates a new test run for the specified project.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTestRun$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createTestRun(params: CreateTestRun$Params, context?: HttpContext): Observable<void> {
    return this.createTestRun$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getTestRun()` */
  static readonly GetTestRunPath = '/tests/testruns/{testRunId}';

  /**
   * Retrieves a specific test run by ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTestRun$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTestRun$Plain$Response(params: GetTestRun$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTestRunTestRunDetailsModel>> {
    return getTestRun$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieves a specific test run by ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTestRun$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTestRun$Plain(params: GetTestRun$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTestRunTestRunDetailsModel> {
    return this.getTestRun$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTestRunTestRunDetailsModel>): SpecBoxWebApiModelTestRunTestRunDetailsModel => r.body)
    );
  }

  /**
   * Retrieves a specific test run by ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTestRun$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTestRun$Json$Response(params: GetTestRun$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTestRunTestRunDetailsModel>> {
    return getTestRun$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieves a specific test run by ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTestRun$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTestRun$Json(params: GetTestRun$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTestRunTestRunDetailsModel> {
    return this.getTestRun$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTestRunTestRunDetailsModel>): SpecBoxWebApiModelTestRunTestRunDetailsModel => r.body)
    );
  }

  /** Path part for operation `deleteTestRun()` */
  static readonly DeleteTestRunPath = '/tests/testruns/{testRunId}';

  /**
   * Deletes a specific test run by ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTestRun()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTestRun$Response(params: DeleteTestRun$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteTestRun(this.http, this.rootUrl, params, context);
  }

  /**
   * Deletes a specific test run by ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTestRun$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTestRun(params: DeleteTestRun$Params, context?: HttpContext): Observable<void> {
    return this.deleteTestRun$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `completeTestRun()` */
  static readonly CompleteTestRunPath = '/tests/testruns/{testRunId}/complete';

  /**
   * Completes a specific test run by ID. All test result in NEW status will be marked as SKIPPED.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `completeTestRun$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  completeTestRun$Plain$Response(params: CompleteTestRun$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTestRunTestRunDetailsModel>> {
    return completeTestRun$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Completes a specific test run by ID. All test result in NEW status will be marked as SKIPPED.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `completeTestRun$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  completeTestRun$Plain(params: CompleteTestRun$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTestRunTestRunDetailsModel> {
    return this.completeTestRun$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTestRunTestRunDetailsModel>): SpecBoxWebApiModelTestRunTestRunDetailsModel => r.body)
    );
  }

  /**
   * Completes a specific test run by ID. All test result in NEW status will be marked as SKIPPED.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `completeTestRun$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  completeTestRun$Json$Response(params: CompleteTestRun$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTestRunTestRunDetailsModel>> {
    return completeTestRun$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Completes a specific test run by ID. All test result in NEW status will be marked as SKIPPED.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `completeTestRun$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  completeTestRun$Json(params: CompleteTestRun$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTestRunTestRunDetailsModel> {
    return this.completeTestRun$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTestRunTestRunDetailsModel>): SpecBoxWebApiModelTestRunTestRunDetailsModel => r.body)
    );
  }

  /** Path part for operation `listTestResults()` */
  static readonly ListTestResultsPath = '/tests/testruns/{testRunId}/testresults';

  /**
   * Retrieves test results for a specific test run.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listTestResults$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTestResults$Plain$Response(params: ListTestResults$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelTestRunTestResultModel>>> {
    return listTestResults$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieves test results for a specific test run.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listTestResults$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTestResults$Plain(params: ListTestResults$Plain$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelTestRunTestResultModel>> {
    return this.listTestResults$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelTestRunTestResultModel>>): Array<SpecBoxWebApiModelTestRunTestResultModel> => r.body)
    );
  }

  /**
   * Retrieves test results for a specific test run.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listTestResults$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTestResults$Json$Response(params: ListTestResults$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelTestRunTestResultModel>>> {
    return listTestResults$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieves test results for a specific test run.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listTestResults$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTestResults$Json(params: ListTestResults$Json$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelTestRunTestResultModel>> {
    return this.listTestResults$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelTestRunTestResultModel>>): Array<SpecBoxWebApiModelTestRunTestResultModel> => r.body)
    );
  }

  /** Path part for operation `getTestResult()` */
  static readonly GetTestResultPath = '/tests/testruns/{testRunId}/testresults/{testResultId}';

  /**
   * Retrieves a specific test result for a given project, test run, and test result ID from the database.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTestResult$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTestResult$Plain$Response(params: GetTestResult$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTestRunTestResultModel>> {
    return getTestResult$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieves a specific test result for a given project, test run, and test result ID from the database.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTestResult$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTestResult$Plain(params: GetTestResult$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTestRunTestResultModel> {
    return this.getTestResult$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTestRunTestResultModel>): SpecBoxWebApiModelTestRunTestResultModel => r.body)
    );
  }

  /**
   * Retrieves a specific test result for a given project, test run, and test result ID from the database.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTestResult$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTestResult$Json$Response(params: GetTestResult$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTestRunTestResultModel>> {
    return getTestResult$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieves a specific test result for a given project, test run, and test result ID from the database.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTestResult$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTestResult$Json(params: GetTestResult$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTestRunTestResultModel> {
    return this.getTestResult$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTestRunTestResultModel>): SpecBoxWebApiModelTestRunTestResultModel => r.body)
    );
  }

  /** Path part for operation `updateTestResult()` */
  static readonly UpdateTestResultPath = '/tests/testruns/{testRunId}/testresults/{testResultId}';

  /**
   * Updates test result with provided Status and Report.
   * Supported Statuses: PASSED, SKIPPED, BLOCKED, INVALID, FAILED, NEW.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTestResult$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateTestResult$Plain$Response(params: UpdateTestResult$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTestRunTestResultModel>> {
    return updateTestResult$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Updates test result with provided Status and Report.
   * Supported Statuses: PASSED, SKIPPED, BLOCKED, INVALID, FAILED, NEW.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTestResult$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateTestResult$Plain(params: UpdateTestResult$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTestRunTestResultModel> {
    return this.updateTestResult$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTestRunTestResultModel>): SpecBoxWebApiModelTestRunTestResultModel => r.body)
    );
  }

  /**
   * Updates test result with provided Status and Report.
   * Supported Statuses: PASSED, SKIPPED, BLOCKED, INVALID, FAILED, NEW.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTestResult$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateTestResult$Json$Response(params: UpdateTestResult$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelTestRunTestResultModel>> {
    return updateTestResult$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Updates test result with provided Status and Report.
   * Supported Statuses: PASSED, SKIPPED, BLOCKED, INVALID, FAILED, NEW.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTestResult$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateTestResult$Json(params: UpdateTestResult$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelTestRunTestResultModel> {
    return this.updateTestResult$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelTestRunTestResultModel>): SpecBoxWebApiModelTestRunTestResultModel => r.body)
    );
  }

  /** Path part for operation `getTestResultHistory()` */
  static readonly GetTestResultHistoryPath = '/tests/testruns/{testRunId}/testresults/{testResultId}/history';

  /**
   * Retrieves test result history.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTestResultHistory$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTestResultHistory$Plain$Response(params: GetTestResultHistory$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelTestRunTestResultHistoryModel>>> {
    return getTestResultHistory$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieves test result history.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTestResultHistory$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTestResultHistory$Plain(params: GetTestResultHistory$Plain$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelTestRunTestResultHistoryModel>> {
    return this.getTestResultHistory$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelTestRunTestResultHistoryModel>>): Array<SpecBoxWebApiModelTestRunTestResultHistoryModel> => r.body)
    );
  }

  /**
   * Retrieves test result history.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTestResultHistory$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTestResultHistory$Json$Response(params: GetTestResultHistory$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelTestRunTestResultHistoryModel>>> {
    return getTestResultHistory$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieves test result history.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTestResultHistory$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTestResultHistory$Json(params: GetTestResultHistory$Json$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelTestRunTestResultHistoryModel>> {
    return this.getTestResultHistory$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelTestRunTestResultHistoryModel>>): Array<SpecBoxWebApiModelTestRunTestResultHistoryModel> => r.body)
    );
  }

}
