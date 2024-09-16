/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccessTokenModel as SpecBoxWebApiModelAuthAccessTokenModel } from '../../models/SpecBox/WebApi/Model/Auth/access-token-model';
import { LoginModel as SpecBoxWebApiModelAuthLoginModel } from '../../models/SpecBox/WebApi/Model/Auth/login-model';

export interface Login$Json$Params {
      body?: SpecBoxWebApiModelAuthLoginModel
}

export function login$Json(http: HttpClient, rootUrl: string, params?: Login$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenModel>> {
  const rb = new RequestBuilder(rootUrl, login$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenModel>;
    })
  );
}

login$Json.PATH = '/auth/login';
