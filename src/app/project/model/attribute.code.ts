export type AttributeCode = string & { readonly brand: unique symbol };
export const AttributeCode = (code: string) => code as AttributeCode;
