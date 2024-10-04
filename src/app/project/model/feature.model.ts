import { FeatureResponse } from '../../../api/models/SpecBox/WebApi/Model/Project/Feature/feature-response';
import {
  AttributeValue,
  mapAttributeValueResponse,
} from './attribute-value.model';
import { FeatureCode } from './feature.code';

export interface Feature {
  code: FeatureCode;
  title: string;
  attributes: AttributeValue[];
}

export function mapFeatureResponse({
  code,
  title,
  attributes,
}: FeatureResponse): Feature {
  return {
    code: FeatureCode(code),
    title,
    attributes: attributes.map(mapAttributeValueResponse),
  };
}
