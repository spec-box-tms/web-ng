/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getFeatureRelations$Json } from '../fn/project/get-feature-relations-json';
import { GetFeatureRelations$Json$Params } from '../fn/project/get-feature-relations-json';
import { getFeatureRelations$Plain } from '../fn/project/get-feature-relations-plain';
import { GetFeatureRelations$Plain$Params } from '../fn/project/get-feature-relations-plain';
import { getProject$Json } from '../fn/project/get-project-json';
import { GetProject$Json$Params } from '../fn/project/get-project-json';
import { getProject$Plain } from '../fn/project/get-project-plain';
import { GetProject$Plain$Params } from '../fn/project/get-project-plain';
import { getStructurePlain$Json } from '../fn/project/get-structure-plain-json';
import { GetStructurePlain$Json$Params } from '../fn/project/get-structure-plain-json';
import { getStructurePlain$Plain } from '../fn/project/get-structure-plain-plain';
import { GetStructurePlain$Plain$Params } from '../fn/project/get-structure-plain-plain';
import { listProjects$Json } from '../fn/project/list-projects-json';
import { ListProjects$Json$Params } from '../fn/project/list-projects-json';
import { listProjects$Plain } from '../fn/project/list-projects-plain';
import { ListProjects$Plain$Params } from '../fn/project/list-projects-plain';
import { ProjectResponse as SpecBoxWebApiModelCommonProjectResponse } from '../models/SpecBox/WebApi/Model/Common/project-response';
import { FeatureRelationsModel as SpecBoxWebApiModelProjectFeatureRelationsModel } from '../models/SpecBox/WebApi/Model/Project/feature-relations-model';
import { StructureModel as SpecBoxWebApiModelProjectStructureModel } from '../models/SpecBox/WebApi/Model/Project/structure-model';

@Injectable({ providedIn: 'root' })
export class ApiProjectService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `listProjects()` */
  static readonly ListProjectsPath = '/projects';

  /**
   * Returns the list of projects.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listProjects$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  listProjects$Plain$Response(params?: ListProjects$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectResponse>>> {
    return listProjects$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns the list of projects.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listProjects$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listProjects$Plain(params?: ListProjects$Plain$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelCommonProjectResponse>> {
    return this.listProjects$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectResponse>>): Array<SpecBoxWebApiModelCommonProjectResponse> => r.body)
    );
  }

  /**
   * Returns the list of projects.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listProjects$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  listProjects$Json$Response(params?: ListProjects$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectResponse>>> {
    return listProjects$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns the list of projects.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listProjects$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listProjects$Json(params?: ListProjects$Json$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelCommonProjectResponse>> {
    return this.listProjects$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectResponse>>): Array<SpecBoxWebApiModelCommonProjectResponse> => r.body)
    );
  }

  /** Path part for operation `getProject()` */
  static readonly GetProjectPath = '/projects/{code}';

  /**
   * Получить детали проекта и версий.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProject$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProject$Plain$Response(params: GetProject$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelCommonProjectResponse>> {
    return getProject$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Получить детали проекта и версий.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProject$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProject$Plain(params: GetProject$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelCommonProjectResponse> {
    return this.getProject$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelCommonProjectResponse>): SpecBoxWebApiModelCommonProjectResponse => r.body)
    );
  }

  /**
   * Получить детали проекта и версий.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProject$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProject$Json$Response(params: GetProject$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelCommonProjectResponse>> {
    return getProject$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Получить детали проекта и версий.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProject$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProject$Json(params: GetProject$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelCommonProjectResponse> {
    return this.getProject$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelCommonProjectResponse>): SpecBoxWebApiModelCommonProjectResponse => r.body)
    );
  }

  /** Path part for operation `getStructurePlain()` */
  static readonly GetStructurePlainPath = '/projects/{project}/versions/{version}/structures:plain';

  /**
   * Returns the list of features for a specific project.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStructurePlain$Plain()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  getStructurePlain$Plain$Response(params: GetStructurePlain$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectStructureModel>> {
    return getStructurePlain$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns the list of features for a specific project.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStructurePlain$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  getStructurePlain$Plain(params: GetStructurePlain$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelProjectStructureModel> {
    return this.getStructurePlain$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelProjectStructureModel>): SpecBoxWebApiModelProjectStructureModel => r.body)
    );
  }

  /**
   * Returns the list of features for a specific project.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStructurePlain$Json()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  getStructurePlain$Json$Response(params: GetStructurePlain$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectStructureModel>> {
    return getStructurePlain$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns the list of features for a specific project.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStructurePlain$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  getStructurePlain$Json(params: GetStructurePlain$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelProjectStructureModel> {
    return this.getStructurePlain$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelProjectStructureModel>): SpecBoxWebApiModelProjectStructureModel => r.body)
    );
  }

  /** Path part for operation `getFeatureRelations()` */
  static readonly GetFeatureRelationsPath = '/projects/{project}/versions/{version}/features:relations';

  /**
   * Returns the graph of feature and attribute relations.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFeatureRelations$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeatureRelations$Plain$Response(params: GetFeatureRelations$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectFeatureRelationsModel>> {
    return getFeatureRelations$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns the graph of feature and attribute relations.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFeatureRelations$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeatureRelations$Plain(params: GetFeatureRelations$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelProjectFeatureRelationsModel> {
    return this.getFeatureRelations$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelProjectFeatureRelationsModel>): SpecBoxWebApiModelProjectFeatureRelationsModel => r.body)
    );
  }

  /**
   * Returns the graph of feature and attribute relations.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFeatureRelations$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeatureRelations$Json$Response(params: GetFeatureRelations$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectFeatureRelationsModel>> {
    return getFeatureRelations$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns the graph of feature and attribute relations.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFeatureRelations$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeatureRelations$Json(params: GetFeatureRelations$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelProjectFeatureRelationsModel> {
    return this.getFeatureRelations$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelProjectFeatureRelationsModel>): SpecBoxWebApiModelProjectFeatureRelationsModel => r.body)
    );
  }

}
