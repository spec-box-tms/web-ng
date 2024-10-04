/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FeatureRelationsModel as SpecBoxWebApiModelProjectFeatureRelationsModel } from '../../models/SpecBox/WebApi/Model/Project/feature-relations-model';

export interface GetFeatureRelations$Plain$Params {

/**
 * The project code.
 */
  project: string;

/**
 * The project version. Default version if not provided.
 */
  version: string;
}

export function getFeatureRelations$Plain(http: HttpClient, rootUrl: string, params: GetFeatureRelations$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectFeatureRelationsModel>> {
  const rb = new RequestBuilder(rootUrl, getFeatureRelations$Plain.PATH, 'get');
  if (params) {
    rb.path('project', params.project, {});
    rb.path('version', params.version, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelProjectFeatureRelationsModel>;
    })
  );
}

getFeatureRelations$Plain.PATH = '/projects/{project}/versions/{version}/features:relations';
