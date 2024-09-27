import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';
import {
  TeamService as TeamHttpService,
  TeamUserService,
} from '../../api/services';
import { TeamId } from '../lib/model/ids/team.id';
import { mapArray } from '../lib/model/map-array';
import { mapTeamUserResponse, TeamUser } from './model/team-user.model';
import { mapTeamResponse, Team } from './model/team.model';

@Injectable()
export class TeamService {
  private readonly refreshTeamsSubject = new BehaviorSubject<void>(undefined);
  private readonly teamService = inject(TeamHttpService);
  private readonly teamUserService = inject(TeamUserService);

  getTeams$(): Observable<Team[]> {
    const loadTeams = this.teamService
      .listTeams$Json()
      .pipe(map(mapArray(mapTeamResponse)));
    return this.refreshTeamsSubject.pipe(switchMap(() => loadTeams));
  }

  getTeam$(teamId: TeamId): Observable<Team> {
    const loadTeam = this.teamService
      .getTeam$Json({ id: teamId })
      .pipe(map(mapTeamResponse));
    return this.refreshTeamsSubject.pipe(switchMap(() => loadTeam));
  }

  getMembers$(teamId: TeamId): Observable<TeamUser[]> {
    return this.teamUserService
      .listTeamUsers$Json({ teamId })
      .pipe(map(mapArray(mapTeamUserResponse)));
  }

  createTeam$(title: string, description?: string): Observable<Team> {
    return this.teamService
      .createTeam$Json({ body: { title, description } })
      .pipe(
        map(mapTeamResponse),
        tap(() => this.refreshTeamsSubject.next())
      );
  }
}
