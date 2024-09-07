/* tslint:disable */
/* eslint-disable */
import { ProjectVersionModel as SpecBoxWebApiModelCommonProjectVersionModel } from '../../../../../models/SpecBox/WebApi/Model/Common/project-version-model';
import { TreeNodeModel as SpecBoxWebApiModelProjectTreeNodeModel } from '../../../../../models/SpecBox/WebApi/Model/Project/tree-node-model';
export interface StructureModel {
  project: SpecBoxWebApiModelCommonProjectVersionModel;
  tree: Array<SpecBoxWebApiModelProjectTreeNodeModel>;
}
