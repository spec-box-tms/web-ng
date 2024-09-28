/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OkResult as MicrosoftAspNetCoreMvcOkResult } from '../../models/Microsoft/AspNetCore/Mvc/ok-result';

export interface DeleteTeamUser$Json$Params {
  teamId: string;
  userLogin: string;
}

export function deleteTeamUser$Json(http: HttpClient, rootUrl: string, params: DeleteTeamUser$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<MicrosoftAspNetCoreMvcOkResult>> {
  const rb = new RequestBuilder(rootUrl, deleteTeamUser$Json.PATH, 'delete');
  if (params) {
    rb.path('teamId', params.teamId, {});
    rb.path('userLogin', params.userLogin, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MicrosoftAspNetCoreMvcOkResult>;
    })
  );
}

deleteTeamUser$Json.PATH = '/teams/{teamId}/users/{userLogin}';
