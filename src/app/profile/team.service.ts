import { inject, Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import {
  TeamService as TeamApiService,
  TeamUserService as TeamUserApiService,
} from '../../api/services';
import { mapArray } from '../lib/map-array';
import { TeamId } from '../lib/model/ids/team.id';
import { updateWhen } from '../lib/update-when';
import { mapTeamUserResponse, TeamUser } from './model/team-user.model';
import { mapTeamResponse, Team } from './model/team.model';
import { TeamUpdate } from './model/team-update.model';

@Injectable()
export class TeamService {
  private readonly refreshTeamsSubject = new Subject<void>();
  private readonly refreshTeamMembersSubject = new Subject<void>();

  private readonly teamUserService = inject(TeamUserApiService);
  private readonly teamService = inject(TeamApiService);

  getTeams$(): Observable<Team[] | null> {
    return this.teamService
      .listTeams$Json()
      .pipe(
        mapArray(mapTeamResponse),
        updateWhen(this.refreshTeamsSubject)
      );
  }

  getTeam$(teamId: TeamId): Observable<Team | null> {
    return this.teamService
      .getTeam$Json({ id: teamId })
      .pipe(map(mapTeamResponse), updateWhen(this.refreshTeamsSubject));
  }

  createTeam$(title: string, description?: string): Observable<Team> {
    return this.teamService
      .createTeam$Json({ body: { title, description } })
      .pipe(
        map(mapTeamResponse),
        tap(() => this.refreshTeamsSubject.next())
      );
  }

  updateTeam$(
    teamId: TeamId,
    request: TeamUpdate,
    rowVersion: string
  ): Observable<Team> {
    return this.teamService
      .updateTeam$Json({ id: teamId, body: { ...request, rowVersion } })
      .pipe(
        map(mapTeamResponse),
        tap(() => this.refreshTeamsSubject.next())
      );
  }

  getMembers$(teamId: TeamId): Observable<TeamUser[] | null> {
    return this.teamUserService
      .listTeamUsers$Json({ teamId })
      .pipe(
        mapArray(mapTeamUserResponse),
        updateWhen(this.refreshTeamMembersSubject)
      );
  }

  addMember$(
    teamId: TeamId,
    login: string,
    isAdmin: boolean
  ): Observable<TeamUser> {
    return this.teamUserService
      .createTeamUser$Json({ teamId, body: { login, isAdmin } })
      .pipe(
        map(mapTeamUserResponse),
        tap(() => this.refreshTeamMembersSubject.next())
      );
  }

  removeMember$(teamId: TeamId, login: string): Observable<boolean> {
    return this.teamUserService
      .deleteTeamUser({ teamId, userLogin: login })
      .pipe(
        map(() => true),
        tap(() => {
          this.refreshTeamMembersSubject.next();
          this.refreshTeamsSubject.next();
        })
      );
  }

  updateMember$(
    teamId: TeamId,
    login: string,
    isAdmin: boolean
  ): Observable<TeamUser> {
    return this.teamUserService
      .updateTeamUser$Json({
        teamId,
        userLogin: login,
        body: { isAdmin },
      })
      .pipe(
        map(mapTeamUserResponse),
        tap(() => this.refreshTeamMembersSubject.next())
      );
  }
}
