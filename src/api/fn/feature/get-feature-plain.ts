/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FeatureModel as SpecBoxWebApiModelProjectFeatureModel } from '../../models/SpecBox/WebApi/Model/Project/feature-model';

export interface GetFeature$Plain$Params {
  projectCode: string;
  version: string;
  featureCode: string;
}

export function getFeature$Plain(http: HttpClient, rootUrl: string, params: GetFeature$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectFeatureModel>> {
  const rb = new RequestBuilder(rootUrl, getFeature$Plain.PATH, 'get');
  if (params) {
    rb.path('projectCode', params.projectCode, {});
    rb.path('version', params.version, {});
    rb.path('featureCode', params.featureCode, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelProjectFeatureModel>;
    })
  );
}

getFeature$Plain.PATH = '/projects/{projectCode}/{version}/features/{featureCode}';