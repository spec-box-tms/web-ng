/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { configGet$Json } from '../fn/default/config-get-json';
import { ConfigGet$Json$Params } from '../fn/default/config-get-json';
import { configGet$Plain } from '../fn/default/config-get-plain';
import { ConfigGet$Plain$Params } from '../fn/default/config-get-plain';
import { ConfigurationModel as SpecBoxWebApiModelDefaultConfigurationModel } from '../models/SpecBox/WebApi/Model/Default/configuration-model';

@Injectable({ providedIn: 'root' })
export class DefaultService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `configGet()` */
  static readonly ConfigGetPath = '/config';

  /**
   * Получение конфигурации приложения.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  configGet$Plain$Response(params?: ConfigGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelDefaultConfigurationModel>> {
    return configGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Получение конфигурации приложения.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `configGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configGet$Plain(params?: ConfigGet$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelDefaultConfigurationModel> {
    return this.configGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelDefaultConfigurationModel>): SpecBoxWebApiModelDefaultConfigurationModel => r.body)
    );
  }

  /**
   * Получение конфигурации приложения.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  configGet$Json$Response(params?: ConfigGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelDefaultConfigurationModel>> {
    return configGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Получение конфигурации приложения.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `configGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configGet$Json(params?: ConfigGet$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelDefaultConfigurationModel> {
    return this.configGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelDefaultConfigurationModel>): SpecBoxWebApiModelDefaultConfigurationModel => r.body)
    );
  }

}
