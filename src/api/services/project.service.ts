/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getFeature$Json } from '../fn/project/get-feature-json';
import { GetFeature$Json$Params } from '../fn/project/get-feature-json';
import { getFeature$Plain } from '../fn/project/get-feature-plain';
import { GetFeature$Plain$Params } from '../fn/project/get-feature-plain';
import { getFeatureRelations$Json } from '../fn/project/get-feature-relations-json';
import { GetFeatureRelations$Json$Params } from '../fn/project/get-feature-relations-json';
import { getFeatureRelations$Plain } from '../fn/project/get-feature-relations-plain';
import { GetFeatureRelations$Plain$Params } from '../fn/project/get-feature-relations-plain';
import { getStructure$Json } from '../fn/project/get-structure-json';
import { GetStructure$Json$Params } from '../fn/project/get-structure-json';
import { getStructure$Plain } from '../fn/project/get-structure-plain';
import { GetStructure$Plain$Params } from '../fn/project/get-structure-plain';
import { getStructurePlain$Json } from '../fn/project/get-structure-plain-json';
import { GetStructurePlain$Json$Params } from '../fn/project/get-structure-plain-json';
import { getStructurePlain$Plain } from '../fn/project/get-structure-plain-plain';
import { GetStructurePlain$Plain$Params } from '../fn/project/get-structure-plain-plain';
import { listProjects$Json } from '../fn/project/list-projects-json';
import { ListProjects$Json$Params } from '../fn/project/list-projects-json';
import { listProjects$Plain } from '../fn/project/list-projects-plain';
import { ListProjects$Plain$Params } from '../fn/project/list-projects-plain';
import { listStructures$Json } from '../fn/project/list-structures-json';
import { ListStructures$Json$Params } from '../fn/project/list-structures-json';
import { listStructures$Plain } from '../fn/project/list-structures-plain';
import { ListStructures$Plain$Params } from '../fn/project/list-structures-plain';
import { ProjectModel as SpecBoxWebApiModelCommonProjectModel } from '../models/SpecBox/WebApi/Model/Common/project-model';
import { FeatureModel as SpecBoxWebApiModelProjectFeatureModel } from '../models/SpecBox/WebApi/Model/Project/feature-model';
import { FeatureRelationsModel as SpecBoxWebApiModelProjectFeatureRelationsModel } from '../models/SpecBox/WebApi/Model/Project/feature-relations-model';
import { StructureModel as SpecBoxWebApiModelProjectStructureModel } from '../models/SpecBox/WebApi/Model/Project/structure-model';
import { TreeModel as SpecBoxWebApiModelProjectTreeModel } from '../models/SpecBox/WebApi/Model/Project/tree-model';

@Injectable({ providedIn: 'root' })
export class ProjectService extends BaseService {
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
  listProjects$Plain$Response(params?: ListProjects$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectModel>>> {
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
  listProjects$Plain(params?: ListProjects$Plain$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelCommonProjectModel>> {
    return this.listProjects$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectModel>>): Array<SpecBoxWebApiModelCommonProjectModel> => r.body)
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
  listProjects$Json$Response(params?: ListProjects$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectModel>>> {
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
  listProjects$Json(params?: ListProjects$Json$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelCommonProjectModel>> {
    return this.listProjects$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelCommonProjectModel>>): Array<SpecBoxWebApiModelCommonProjectModel> => r.body)
    );
  }

  /** Path part for operation `getFeature()` */
  static readonly GetFeaturePath = '/projects/{project}/features/{feature}';

  /**
   * Returns the feature details.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFeature$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeature$Plain$Response(params: GetFeature$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectFeatureModel>> {
    return getFeature$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns the feature details.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFeature$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeature$Plain(params: GetFeature$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelProjectFeatureModel> {
    return this.getFeature$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelProjectFeatureModel>): SpecBoxWebApiModelProjectFeatureModel => r.body)
    );
  }

  /**
   * Returns the feature details.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFeature$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeature$Json$Response(params: GetFeature$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectFeatureModel>> {
    return getFeature$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns the feature details.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFeature$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeature$Json(params: GetFeature$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelProjectFeatureModel> {
    return this.getFeature$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelProjectFeatureModel>): SpecBoxWebApiModelProjectFeatureModel => r.body)
    );
  }

  /** Path part for operation `getStructurePlain()` */
  static readonly GetStructurePlainPath = '/projects/{project}/structures:plain';

  /**
   * Returns the list of features for a specific project.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStructurePlain$Plain()` instead.
   *
   * This method doesn't expect any request body.
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
   */
  getStructurePlain$Json(params: GetStructurePlain$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelProjectStructureModel> {
    return this.getStructurePlain$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelProjectStructureModel>): SpecBoxWebApiModelProjectStructureModel => r.body)
    );
  }

  /** Path part for operation `listStructures()` */
  static readonly ListStructuresPath = '/projects/{project}/structures';

  /**
   * Returns the list of structures for a specific project.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listStructures$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  listStructures$Plain$Response(params: ListStructures$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelProjectTreeModel>>> {
    return listStructures$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns the list of structures for a specific project.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listStructures$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listStructures$Plain(params: ListStructures$Plain$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelProjectTreeModel>> {
    return this.listStructures$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelProjectTreeModel>>): Array<SpecBoxWebApiModelProjectTreeModel> => r.body)
    );
  }

  /**
   * Returns the list of structures for a specific project.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listStructures$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  listStructures$Json$Response(params: ListStructures$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecBoxWebApiModelProjectTreeModel>>> {
    return listStructures$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns the list of structures for a specific project.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listStructures$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listStructures$Json(params: ListStructures$Json$Params, context?: HttpContext): Observable<Array<SpecBoxWebApiModelProjectTreeModel>> {
    return this.listStructures$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecBoxWebApiModelProjectTreeModel>>): Array<SpecBoxWebApiModelProjectTreeModel> => r.body)
    );
  }

  /** Path part for operation `getStructure()` */
  static readonly GetStructurePath = '/projects/{project}/structures/{treeCode}';

  /**
   * Returns the structure details.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStructure$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStructure$Plain$Response(params: GetStructure$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectStructureModel>> {
    return getStructure$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns the structure details.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStructure$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStructure$Plain(params: GetStructure$Plain$Params, context?: HttpContext): Observable<SpecBoxWebApiModelProjectStructureModel> {
    return this.getStructure$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelProjectStructureModel>): SpecBoxWebApiModelProjectStructureModel => r.body)
    );
  }

  /**
   * Returns the structure details.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStructure$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStructure$Json$Response(params: GetStructure$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecBoxWebApiModelProjectStructureModel>> {
    return getStructure$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns the structure details.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStructure$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStructure$Json(params: GetStructure$Json$Params, context?: HttpContext): Observable<SpecBoxWebApiModelProjectStructureModel> {
    return this.getStructure$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecBoxWebApiModelProjectStructureModel>): SpecBoxWebApiModelProjectStructureModel => r.body)
    );
  }

  /** Path part for operation `getFeatureRelations()` */
  static readonly GetFeatureRelationsPath = '/projects/{project}/features:relations';

  /**
   * Returns the graph of feature and attribute rlations.
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
   * Returns the graph of feature and attribute rlations.
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
   * Returns the graph of feature and attribute rlations.
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
   * Returns the graph of feature and attribute rlations.
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
