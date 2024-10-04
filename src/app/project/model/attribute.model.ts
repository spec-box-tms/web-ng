import { AttributeCode } from './attribute.code';
import { AttributeModel } from '../../../api/models/SpecBox/WebApi/Model/Project/attribute-model';
import { toUndefined } from '../../lib/model/to-undefined';

export interface Attribute {
  code: AttributeCode;
  title?: string;
}

export function mapAttributeResponse({
  code,
  title,
}: AttributeModel): Attribute {
  return {
    code: AttributeCode(code),
    title: toUndefined(title),
  };
}
