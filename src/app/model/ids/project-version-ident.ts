export type ProjectVersionIdent = string & { readonly brand: unique symbol };
export const ProjectVersionIdent = (version: string) => version as ProjectVersionIdent;
