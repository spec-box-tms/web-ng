/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccessTokenResponse as SpecBoxWebApiModelAuthAccessTokenResponse } from '../../models/SpecBox/WebApi/Model/Auth/access-token-response';
import { RefreshTokenExchangeRequest as SpecBoxWebApiModelAuthRefreshTokenExchangeRequest } from '../../models/SpecBox/WebApi/Model/Auth/refresh-token-exchange-request';

export interface RefreshTokens$Json$Params {
      body?: SpecBoxWebApiModelAuthRefreshTokenExchangeRequest
}

export function refreshTokens$Json(http: HttpClient, rootUrl: string, params?: RefreshTokens$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenResponse>> {
  const rb = new RequestBuilder(rootUrl, refreshTokens$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecBoxWebApiModelAuthAccessTokenResponse>;
    })
  );
}

refreshTokens$Json.PATH = '/auth/refresh';
