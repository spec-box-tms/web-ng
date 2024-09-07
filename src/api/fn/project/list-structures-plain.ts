/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TreeModel as SpecBoxWebApiModelProjectTreeModel } from '../../models/SpecBox/WebApi/Model/Project/tree-model';

export interface ListStructures$Plain$Params {

/**
 * The project code.
 */
  project: string;

/**
 * The project version. Default version if not provided.
 */
  version?: string;
}

export function listStructures$Plain(http: HttpClient, rootUrl: string, params: ListStructures$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelProjectTreeModel>>> {
  const rb = new RequestBuilder(rootUrl, listStructures$Plain.PATH, 'get');
  if (params) {
    rb.path('project', params.project, {});
    rb.query('version', params.version, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SpecBoxWebApiModelProjectTreeModel>>;
    })
  );
}

listStructures$Plain.PATH = '/projects/{project}/structures';
