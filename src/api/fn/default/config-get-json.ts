/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ConfigurationModel as SpecBoxWebApiModelDefaultConfigurationModel } from '../../models/SpecBox/WebApi/Model/Default/configuration-model';

export interface ConfigGet$Json$Params {
}

export function configGet$Json(http: HttpClient, rootUrl: string, params?: ConfigGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelDefaultConfigurationModel>> {
  const rb = new RequestBuilder(rootUrl, configGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelDefaultConfigurationModel>;
    })
  );
}

configGet$Json.PATH = '/config';
