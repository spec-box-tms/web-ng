/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FeatureResponse as SpecBoxWebApiModelProjectFeatureFeatureResponse } from '../../models/SpecBox/WebApi/Model/Project/Feature/feature-response';

export interface ListFeatures$Json$Params {
  projectCode: string;
  version: string;
}

export function listFeatures$Json(http: HttpClient, rootUrl: string, params: ListFeatures$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelProjectFeatureFeatureResponse>>> {
  const rb = new RequestBuilder(rootUrl, listFeatures$Json.PATH, 'get');
  if (params) {
    rb.path('projectCode', params.projectCode, {});
    rb.path('version', params.version, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SpecBoxWebApiModelProjectFeatureFeatureResponse>>;
    })
  );
}

listFeatures$Json.PATH = '/projects/{projectCode}/{version}/features';
