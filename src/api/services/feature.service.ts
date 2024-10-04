/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getFeature$Json } from '../fn/feature/get-feature-json';
import { GetFeature$Json$Params } from '../fn/feature/get-feature-json';
import { getFeature$Plain } from '../fn/feature/get-feature-plain';
import { GetFeature$Plain$Params } from '../fn/feature/get-feature-plain';
import { listFeatures$Json } from '../fn/feature/list-features-json';
import { ListFeatures$Json$Params } from '../fn/feature/list-features-json';
import { listFeatures$Plain } from '../fn/feature/list-features-plain';
import { ListFeatures$Plain$Params } from '../fn/feature/list-features-plain';
import { FeatureResponse as SpecBoxWebApiModelProjectFeatureFeatureResponse } from '../models/SpecBox/WebApi/Model/Project/Feature/feature-response';
import { FeatureModel as SpecBoxWebApiModelProjectFeatureModel } from '../models/SpecBox/WebApi/Model/Project/feature-model';

@Injectable({ providedIn: 'root' })
export class ApiFeatureService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `listFeatures()` */
  static readonly ListFeaturesPath = '/projects/{projectCode}/{version}/features';

  /**
   * Детали фичи.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listFeatures$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  listFeatures$Plain$Response(params: ListFeatures$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelProjectFeatureFeatureResponse>>> {
    return listFeatures$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Детали фичи.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listFeatures$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listFeatures$Plain(params: ListFeatures$Plain$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelProjectFeatureFeatureResponse>> {
    return this.listFeatures$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelProjectFeatureFeatureResponse>>): Array<SpecBoxWebApiModelProjectFeatureFeatureResponse> => r.body)
    );
  }

  /**
   * Детали фичи.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listFeatures$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  listFeatures$Json$Response(params: ListFeatures$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelProjectFeatureFeatureResponse>>> {
    return listFeatures$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Детали фичи.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listFeatures$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listFeatures$Json(params: ListFeatures$Json$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelProjectFeatureFeatureResponse>> {
    return this.listFeatures$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelProjectFeatureFeatureResponse>>): Array<SpecBoxWebApiModelProjectFeatureFeatureResponse> => r.body)
    );
  }

  /** Path part for operation `getFeature()` */
  static readonly GetFeaturePath = '/projects/{projectCode}/{version}/features/{featureCode}';

  /**
   * Детали фичи.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFeature$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeature$Plain$Response(params: GetFeature$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectFeatureModel>> {
    return getFeature$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Детали фичи.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFeature$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeature$Plain(params: GetFeature$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelProjectFeatureModel> {
    return this.getFeature$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelProjectFeatureModel>): SpecBoxWebApiModelProjectFeatureModel => r.body)
    );
  }

  /**
   * Детали фичи.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFeature$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeature$Json$Response(params: GetFeature$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectFeatureModel>> {
    return getFeature$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Детали фичи.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFeature$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeature$Json(params: GetFeature$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelProjectFeatureModel> {
    return this.getFeature$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelProjectFeatureModel>): SpecBoxWebApiModelProjectFeatureModel => r.body)
    );
  }

}
