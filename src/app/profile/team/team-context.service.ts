import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, shareReplay, switchMap } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { TeamId } from '../../lib/model/ids/team.id';
import { TeamService } from '../team.service';

@Injectable()
export class TeamContextService {
  private activeRoute = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private teamService = inject(TeamService);

  teamId$ = this.activeRoute.params.pipe(map(({ teamId }) => TeamId(teamId)));

  team$ = this.teamId$.pipe(
    switchMap((teamId) => this.teamService.getTeam$(teamId)),
    shareReplay(1)
  );

  isAdmin$ = combineLatest([this.authService.user$, this.teamId$]).pipe(
    switchMap(([login, teamId]) => {
      return this.teamService
        .getMembers$(teamId)
        .pipe(
          map(
            (members) =>
              members &&
              members.some(
                (member) => member.user.login === login && member.isAdmin
              )
          )
        );
    }),
    shareReplay(1)
  );
}
