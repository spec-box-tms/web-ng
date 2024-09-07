/* tslint:disable */
/* eslint-disable */
import { AttributeModel as SpecBoxWebApiModelUploadAttributeModel } from '../../../../../models/SpecBox/WebApi/Model/Upload/attribute-model';
import { FeatureModel as SpecBoxWebApiModelUploadFeatureModel } from '../../../../../models/SpecBox/WebApi/Model/Upload/feature-model';
import { ProjectModel as SpecBoxWebApiModelUploadProjectModel } from '../../../../../models/SpecBox/WebApi/Model/Upload/project-model';
import { TreeModel as SpecBoxWebApiModelUploadTreeModel } from '../../../../../models/SpecBox/WebApi/Model/Upload/tree-model';
export interface UploadData {
  attributes: Array<SpecBoxWebApiModelUploadAttributeModel>;
  features: Array<SpecBoxWebApiModelUploadFeatureModel>;
  project: SpecBoxWebApiModelUploadProjectModel;
  trees: Array<SpecBoxWebApiModelUploadTreeModel>;
}
