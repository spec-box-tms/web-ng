import { UserId } from './ids/user.id';
import { UUID } from './ids/uuid';

export interface AuditableEntity<KEY extends UUID> {
  id: KEY;
  createdAt: Date;
  createdById: UserId;
  updatedAt: Date;
  updatedById: UserId;
  deletedAt?: Date;
  deletedById?: UserId;
}

interface LikeAuditableEntity {
  id: string;
  createdAt: string;
  createdById: string;
  updatedAt: string;
  updatedById: string;
  deletedAt?: string | null;
  deletedById?: string | null;
}

export function mapAuditableEntity<T extends UUID>(
  keyMapper: (id: UUID) => T,
  input: LikeAuditableEntity
): AuditableEntity<T> {
  return {
    id: keyMapper(input.id),
    createdAt: new Date(input.createdAt),
    createdById: UserId(input.createdById),
    updatedAt: new Date(input.updatedAt),
    updatedById: UserId(input.updatedById),
    deletedAt: input.deletedAt ? new Date(input.deletedAt) : undefined,
    deletedById: input.deletedById ? UserId(input.deletedById) : undefined,
  };
}
