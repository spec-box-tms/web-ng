export type FeatureCode = string & { readonly brand: unique symbol };
export const FeatureCode = (code: string) => code as FeatureCode;
