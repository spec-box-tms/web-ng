export type ProjectCode = string & { readonly brand: unique symbol };
export const ProjectCode = (code: string) => code as ProjectCode;
