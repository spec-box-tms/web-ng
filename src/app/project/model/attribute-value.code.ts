export type AttributeValueCode = string & { readonly brand: unique symbol };
export const AttributeValueCode = (code: string) => code as AttributeValueCode;
