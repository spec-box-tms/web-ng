/* tslint:disable */
/* eslint-disable */
import { UserResponse as SpecBoxWebApiModelUsersUserResponse } from '../../../../../models/SpecBox/WebApi/Model/Users/user-response';
export interface TeamUserResponse {
  createdAt: string;
  createdBy: SpecBoxWebApiModelUsersUserResponse;
  isAdmin: boolean;
  teamId: string;
  updatedAt: string;
  updatedBy: SpecBoxWebApiModelUsersUserResponse;
  user: SpecBoxWebApiModelUsersUserResponse;
}
