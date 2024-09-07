/* tslint:disable */
/* eslint-disable */
import { AssertionGroupModel as SpecBoxWebApiModelUploadAssertionGroupModel } from '../../../../../models/SpecBox/WebApi/Model/Upload/assertion-group-model';
export interface FeatureModel {
  attributes?: ({
[key: string]: Array<string>;
}) | null;
  code: string;
  description?: string | null;
  filePath?: string | null;
  groups: Array<SpecBoxWebApiModelUploadAssertionGroupModel>;
  title: string;
}
