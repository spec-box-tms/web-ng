import { UUID } from './uuid';

export type UserId = UUID & { readonly brand: unique symbol };
export const UserId = (id: UUID) => id as UserId;
