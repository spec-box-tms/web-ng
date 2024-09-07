/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { exportUploadProjectPost } from '../fn/export/export-upload-project-post';
import { ExportUploadProjectPost$Params } from '../fn/export/export-upload-project-post';

@Injectable({ providedIn: 'root' })
export class ExportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exportUploadProjectPost()` */
  static readonly ExportUploadProjectPostPath = '/export/upload/{project}';

  /**
   * Uploads project data. If project with the same code and version exists, it will be updated.
   * If project has test runs, it can't be updated.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportUploadProjectPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  exportUploadProjectPost$Response(params: ExportUploadProjectPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return exportUploadProjectPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Uploads project data. If project with the same code and version exists, it will be updated.
   * If project has test runs, it can't be updated.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exportUploadProjectPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  exportUploadProjectPost(params: ExportUploadProjectPost$Params, context?: HttpContext): Observable<void> {
    return this.exportUploadProjectPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
