/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateUserRequest as SpecBoxWebApiModelUsersUpdateUserRequest } from '../../models/SpecBox/WebApi/Model/Users/update-user-request';
import { UserResponse as SpecBoxWebApiModelUsersUserResponse } from '../../models/SpecBox/WebApi/Model/Users/user-response';

export interface UpdateProfile$Json$Params {
      body?: SpecBoxWebApiModelUsersUpdateUserRequest
}

export function updateProfile$Json(http: HttpClient, rootUrl: string, params?: UpdateProfile$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelUsersUserResponse>> {
  const rb = new RequestBuilder(rootUrl, updateProfile$Json.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelUsersUserResponse>;
    })
  );
}

updateProfile$Json.PATH = '/profile';
