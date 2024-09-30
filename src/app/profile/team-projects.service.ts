import { inject, Injectable } from '@angular/core';
import { TeamId } from '../model/ids/team.id';
import { mapProjectResponse, Project } from '../model/project.model';
import { TeamProjectsService as TeamProjectsApiService } from '../../api/services';
import { Observable } from 'rxjs';
import { mapArray } from '../lib/map-array';

@Injectable()
export class TeamProjectsService {
  private teamProjectApiService = inject(TeamProjectsApiService);

  list$(teamId: TeamId): Observable<Project[]> {
    return this.teamProjectApiService
      .listTeamProjects$Json({ teamId })
      .pipe(mapArray(mapProjectResponse));
  }
}
