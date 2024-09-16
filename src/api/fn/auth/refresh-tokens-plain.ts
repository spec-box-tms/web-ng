/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccessTokenModel as SpecBoxWebApiModelAuthAccessTokenModel } from '../../models/SpecBox/WebApi/Model/Auth/access-token-model';
import { RefreshTokenExchangeModel as SpecBoxWebApiModelAuthRefreshTokenExchangeModel } from '../../models/SpecBox/WebApi/Model/Auth/refresh-token-exchange-model';

export interface RefreshTokens$Plain$Params {
      body?: SpecBoxWebApiModelAuthRefreshTokenExchangeModel
}

export function refreshTokens$Plain(http: HttpClient, rootUrl: string, params?: RefreshTokens$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenModel>> {
  const rb = new RequestBuilder(rootUrl, refreshTokens$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenModel>;
    })
  );
}

refreshTokens$Plain.PATH = '/auth/refresh';
