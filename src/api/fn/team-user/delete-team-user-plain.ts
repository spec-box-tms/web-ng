/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OkResult as MicrosoftAspNetCoreMvcOkResult } from '../../models/Microsoft/AspNetCore/Mvc/ok-result';

export interface DeleteTeamUser$Plain$Params {
  teamId: string;
  userLogin: string;
}

export function deleteTeamUser$Plain(http: HttpClient, rootUrl: string, params: DeleteTeamUser$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<MicrosoftAspNetCoreMvcOkResult>> {
  const rb = new RequestBuilder(rootUrl, deleteTeamUser$Plain.PATH, 'delete');
  if (params) {
    rb.path('teamId', params.teamId, {});
    rb.path('userLogin', params.userLogin, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MicrosoftAspNetCoreMvcOkResult>;
    })
  );
}

deleteTeamUser$Plain.PATH = '/teams/{teamId}/users/{userLogin}';
