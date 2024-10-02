
export type ProjectCode = string & { readonly brand: unique symbol };
export const ProjectCode = (id: string) => id as ProjectCode;
