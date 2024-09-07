/* tslint:disable */
/* eslint-disable */
import { AssertionGroupModel as SpecBoxWebApiModelProjectAssertionGroupModel } from '../../../../../models/SpecBox/WebApi/Model/Project/assertion-group-model';
import { AttributeValueModel as SpecBoxWebApiModelProjectAttributeValueModel } from '../../../../../models/SpecBox/WebApi/Model/Project/attribute-value-model';
export interface FeatureModel {
  assertionGroups: Array<SpecBoxWebApiModelProjectAssertionGroupModel>;
  attributes: Array<SpecBoxWebApiModelProjectAttributeValueModel>;
  code: string;
  description?: string | null;
  filePath?: string | null;
  title: string;
}
