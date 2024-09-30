/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateUserRequest as SpecBoxWebApiModelUsersUpdateUserRequest } from '../../models/SpecBox/WebApi/Model/Users/update-user-request';
import { UserResponse as SpecBoxWebApiModelUsersUserResponse } from '../../models/SpecBox/WebApi/Model/Users/user-response';

export interface UpdateProfile$Plain$Params {
      body?: SpecBoxWebApiModelUsersUpdateUserRequest
}

export function updateProfile$Plain(http: HttpClient, rootUrl: string, params?: UpdateProfile$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelUsersUserResponse>> {
  const rb = new RequestBuilder(rootUrl, updateProfile$Plain.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

updateProfile$Plain.PATH = '/profile';