/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FeatureRelationsModel as SpecBoxWebApiModelProjectFeatureRelationsModel } from '../../models/SpecBox/WebApi/Model/Project/feature-relations-model';

export interface GetFeatureRelations$Json$Params {

/**
 * The project code.
 */
  project: string;

/**
 * The project version. Default version if not provided.
 */
  version?: string;
}

export function getFeatureRelations$Json(http: HttpClient, rootUrl: string, params: GetFeatureRelations$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectFeatureRelationsModel>> {
  const rb = new RequestBuilder(rootUrl, getFeatureRelations$Json.PATH, 'get');
  if (params) {
    rb.path('project', params.project, {});
    rb.query('version', params.version, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelProjectFeatureRelationsModel>;
    })
  );
}

getFeatureRelations$Json.PATH = '/projects/{project}/features:relations';
