/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FeatureModel as SpecBoxWebApiModelProjectFeatureModel } from '../../models/SpecBox/WebApi/Model/Project/feature-model';

export interface GetFeature$Json$Params {

/**
 * The project code.
 */
  project: string;

/**
 * The feature code.
 */
  feature: string;

/**
 * The project version. Default version if not provided.
 */
  version?: string;
}

export function getFeature$Json(http: HttpClient, rootUrl: string, params: GetFeature$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectFeatureModel>> {
  const rb = new RequestBuilder(rootUrl, getFeature$Json.PATH, 'get');
  if (params) {
    rb.path('project', params.project, {});
    rb.path('feature', params.feature, {});
    rb.query('version', params.version, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelProjectFeatureModel>;
    })
  );
}

getFeature$Json.PATH = '/projects/{project}/features/{feature}';
