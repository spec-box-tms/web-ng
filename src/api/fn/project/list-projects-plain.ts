/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProjectModel as SpecBoxWebApiModelCommonProjectModel } from '../../models/SpecBox/WebApi/Model/Common/project-model';

export interface ListProjects$Plain$Params {
}

export function listProjects$Plain(http: HttpClient, rootUrl: string, params?: ListProjects$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectModel>>> {
  const rb = new RequestBuilder(rootUrl, listProjects$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectModel>>;
    })
  );
}

listProjects$Plain.PATH = '/projects';
