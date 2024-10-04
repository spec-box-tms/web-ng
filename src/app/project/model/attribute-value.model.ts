import { Attribute } from './attribute.model';
import { AttributeValueCode } from './attribute-value.code';
import { AttributeValueModel } from '../../../api/models/SpecBox/WebApi/Model/Project/attribute-value-model';
import { toUndefined } from '../../lib/model/to-undefined';
import { mapAttributeResponse } from './attribute.model';

export interface AttributeValue {
  code: AttributeValueCode;
  title?: string;
  attribute: Attribute;
}

export function mapAttributeValueResponse({
  code,
  title,
  attribute,
}: AttributeValueModel): AttributeValue {
  return {
    code: AttributeValueCode(code),
    title: toUndefined(title),
    attribute: mapAttributeResponse(attribute),
  };
}
