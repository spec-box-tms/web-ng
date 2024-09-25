import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  TeamService as TeamHttpService,
  TeamUserService,
} from '../../api/services';
import { mapArray } from '../lib/model/map-array';
import { mapTeamResponse, Team } from './model/team.model';

@Injectable()
export class TeamService {
  private readonly teamHttpService = inject(TeamHttpService);
  private readonly teamUserService = inject(TeamUserService);

  getTeams$(): Observable<Team[]> {
    return this.teamHttpService
      .listTeams$Json()
      .pipe(map(mapArray(mapTeamResponse)));
  }
}
