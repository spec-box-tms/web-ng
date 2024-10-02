import { TeamUserResponse } from '../../../api/models/SpecBox/WebApi/Model/Teams/team-user-response';
import { TeamId } from '../../model/ids/team.id';
import { mapUserResponse, User } from '../../model/user.model';

export interface TeamUser {
  isAdmin: boolean;
  teamId: TeamId;
  user: User;
  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;
}

export function mapTeamUserResponse(response: TeamUserResponse): TeamUser {
  return {
    teamId: TeamId(response.teamId),
    user: mapUserResponse(response.user),
    isAdmin: response.isAdmin,
    createdAt: new Date(response.createdAt),
    createdBy: mapUserResponse(response.createdBy),
    updatedAt: new Date(response.updatedAt),
    updatedBy: mapUserResponse(response.updatedBy),
  };
}
