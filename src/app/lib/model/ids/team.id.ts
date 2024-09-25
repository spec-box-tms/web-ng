import { UUID } from './uuid';

export type TeamId = UUID & { readonly brand: unique symbol };
export const TeamId = (id: UUID) => id as TeamId;
