/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StructureModel as SpecBoxWebApiModelProjectStructureModel } from '../../models/SpecBox/WebApi/Model/Project/structure-model';

export interface GetStructurePlain$Plain$Params {

/**
 * The project code.
 */
  project: string;

/**
 * The project version. Default version if not provided.
 */
  version: string;
}

export function getStructurePlain$Plain(http: HttpClient, rootUrl: string, params: GetStructurePlain$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectStructureModel>> {
  const rb = new RequestBuilder(rootUrl, getStructurePlain$Plain.PATH, 'get');
  if (params) {
    rb.path('project', params.project, {});
    rb.path('version', params.version, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelProjectStructureModel>;
    })
  );
}

getStructurePlain$Plain.PATH = '/projects/{project}/versions/{version}/structures:plain';
