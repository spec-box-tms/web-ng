import { TeamResponse } from '../../../api/models/SpecBox/WebApi/Model/Teams/team-response';
import {
  AuditableEntity,
  mapAuditableEntity,
} from '../../lib/model/auditable-entity';
import { TeamId } from '../../lib/model/ids/team.id';
import { toUndefined } from '../../lib/model/to-undefined';

export interface Team extends AuditableEntity<TeamId> {
  title: string;
  description?: string;
}

export function mapTeamResponse(input: TeamResponse): Team {
  const { title, description } = input;

  return {
    ...mapAuditableEntity(TeamId, input),
    title,
    description: toUndefined(description),
  };
}
