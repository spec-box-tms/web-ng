/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getStructure$Json } from '../fn/project-structure/get-structure-json';
import { GetStructure$Json$Params } from '../fn/project-structure/get-structure-json';
import { getStructure$Plain } from '../fn/project-structure/get-structure-plain';
import { GetStructure$Plain$Params } from '../fn/project-structure/get-structure-plain';
import { listStructures$Json } from '../fn/project-structure/list-structures-json';
import { ListStructures$Json$Params } from '../fn/project-structure/list-structures-json';
import { listStructures$Plain } from '../fn/project-structure/list-structures-plain';
import { ListStructures$Plain$Params } from '../fn/project-structure/list-structures-plain';
import { StructureModel as SpecBoxWebApiModelProjectStructureModel } from '../models/SpecBox/WebApi/Model/Project/structure-model';
import { TreeModel as SpecBoxWebApiModelProjectTreeModel } from '../models/SpecBox/WebApi/Model/Project/tree-model';

@Injectable({ providedIn: 'root' })
export class ApiProjectStructureService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `listStructures()` */
  static readonly ListStructuresPath = '/projects/{projectCode}/structures';

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
  static readonly GetStructurePath = '/projects/{projectCode}/structures/{treeCode}';

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

}
