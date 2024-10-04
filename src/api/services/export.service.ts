/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { exportUploadProjectVersionsVersionPost } from '../fn/export/export-upload-project-versions-version-post';
import { ExportUploadProjectVersionsVersionPost$Params } from '../fn/export/export-upload-project-versions-version-post';

@Injectable({ providedIn: 'root' })
export class ApiExportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exportUploadProjectVersionsVersionPost()` */
  static readonly ExportUploadProjectVersionsVersionPostPath = '/export/upload/{project}/versions/{version}';

  /**
   * Uploads project data. If project with the same code and version exists, it will be updated.
   * If project has test runs, it can't be updated.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exportUploadProjectVersionsVersionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  exportUploadProjectVersionsVersionPost$Response(params: ExportUploadProjectVersionsVersionPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return exportUploadProjectVersionsVersionPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Uploads project data. If project with the same code and version exists, it will be updated.
   * If project has test runs, it can't be updated.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exportUploadProjectVersionsVersionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  exportUploadProjectVersionsVersionPost(params: ExportUploadProjectVersionsVersionPost$Params, context?: HttpContext): Observable<void> {
    return this.exportUploadProjectVersionsVersionPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
