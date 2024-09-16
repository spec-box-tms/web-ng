/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccessTokenModel as SpecBoxWebApiModelAuthAccessTokenModel } from '../../models/SpecBox/WebApi/Model/Auth/access-token-model';
import { UserRegisterModel as SpecBoxWebApiModelAuthUserRegisterModel } from '../../models/SpecBox/WebApi/Model/Auth/user-register-model';

export interface Register$Json$Params {
      body?: SpecBoxWebApiModelAuthUserRegisterModel
}

export function register$Json(http: HttpClient, rootUrl: string, params?: Register$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenModel>> {
  const rb = new RequestBuilder(rootUrl, register$Json.PATH, 'post');
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

register$Json.PATH = '/auth/register';
