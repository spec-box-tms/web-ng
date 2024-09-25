import { UserResponse } from '../../../api/models/SpecBox/WebApi/Model/Users/user-response';
import { UserId } from '../../lib/model/ids/user.id';
import { toUndefined } from '../../lib/model/to-undefined';

export interface User {
  id: UserId;
  login: string;
  email: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export function mapUserResponse(input: UserResponse): User {
  const { id, login, email, name, description, createdAt, updatedAt } = input;

  return {
    id: UserId(id),
    login,
    email,
    name,
    description: toUndefined(description),
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt),
  };
}
