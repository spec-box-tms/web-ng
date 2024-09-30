import { UUID } from './uuid';

export type ProjectId = UUID & { readonly brand: unique symbol };
export const ProjectId = (id: UUID) => id as ProjectId;
