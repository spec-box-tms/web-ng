import { inject, Injectable } from '@angular/core';
import { TeamId } from '../model/ids/team.id';
import { mapProjectResponse, Project } from '../model/project.model';
import { Observable } from 'rxjs';
import { mapArray } from '../lib/map-array';
import { ApiTeamProjectsService } from '../../api/services';

@Injectable()
export class TeamProjectsService {
  private apiTeamProjectService = inject(ApiTeamProjectsService);

  list$(teamId: TeamId): Observable<Project[]> {
    return this.apiTeamProjectService
      .listTeamProjects$Json({ teamId })
      .pipe(mapArray(mapProjectResponse));
  }
}
