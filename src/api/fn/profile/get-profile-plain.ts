/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserResponse as SpecBoxWebApiModelUsersUserResponse } from '../../models/SpecBox/WebApi/Model/Users/user-response';

export interface GetProfile$Plain$Params {
}

export function getProfile$Plain(http: HttpClient, rootUrl: string, params?: GetProfile$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelUsersUserResponse>> {
  const rb = new RequestBuilder(rootUrl, getProfile$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelUsersUserResponse>;
    })
  );
}

getProfile$Plain.PATH = '/profile';
