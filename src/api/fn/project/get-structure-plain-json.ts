/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StructureModel as SpecBoxWebApiModelProjectStructureModel } from '../../models/SpecBox/WebApi/Model/Project/structure-model';

export interface GetStructurePlain$Json$Params {

/**
 * The project code.
 */
  project: string;

/**
 * The project version. Default version if not provided.
 */
  version: string;
}

export function getStructurePlain$Json(http: HttpClient, rootUrl: string, params: GetStructurePlain$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectStructureModel>> {
  const rb = new RequestBuilder(rootUrl, getStructurePlain$Json.PATH, 'get');
  if (params) {
    rb.path('project', params.project, {});
    rb.path('version', params.version, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelProjectStructureModel>;
    })
  );
}

getStructurePlain$Json.PATH = '/projects/{project}/versions/{version}/structures:plain';
