/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { autotestsStatUpload } from '../fn/stat/autotests-stat-upload';
import { AutotestsStatUpload$Params } from '../fn/stat/autotests-stat-upload';
import { getAutotestsStat$Json } from '../fn/stat/get-autotests-stat-json';
import { GetAutotestsStat$Json$Params } from '../fn/stat/get-autotests-stat-json';
import { getAutotestsStat$Plain } from '../fn/stat/get-autotests-stat-plain';
import { GetAutotestsStat$Plain$Params } from '../fn/stat/get-autotests-stat-plain';
import { StatModel as SpecBoxWebApiModelStatStatModel } from '../models/SpecBox/WebApi/Model/Stat/stat-model';

@Injectable({ providedIn: 'root' })
export class StatService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `autotestsStatUpload()` */
  static readonly AutotestsStatUploadPath = '/stat/upload-autotests';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `autotestsStatUpload()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  autotestsStatUpload$Response(params?: AutotestsStatUpload$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return autotestsStatUpload(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `autotestsStatUpload$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  autotestsStatUpload(params?: AutotestsStatUpload$Params, context?: HttpContext): Observable<void> {
    return this.autotestsStatUpload$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAutotestsStat()` */
  static readonly GetAutotestsStatPath = '/stat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAutotestsStat$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAutotestsStat$Plain$Response(params?: GetAutotestsStat$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelStatStatModel>> {
    return getAutotestsStat$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAutotestsStat$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAutotestsStat$Plain(params?: GetAutotestsStat$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelStatStatModel> {
    return this.getAutotestsStat$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelStatStatModel>): SpecBoxWebApiModelStatStatModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAutotestsStat$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAutotestsStat$Json$Response(params?: GetAutotestsStat$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelStatStatModel>> {
    return getAutotestsStat$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAutotestsStat$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAutotestsStat$Json(params?: GetAutotestsStat$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelStatStatModel> {
    return this.getAutotestsStat$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelStatStatModel>): SpecBoxWebApiModelStatStatModel => r.body)
    );
  }

}
