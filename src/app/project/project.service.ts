import { inject, Injectable } from '@angular/core';
import { ProjectCode } from '../model/ids/project.code';
import { map, Observable } from 'rxjs';
import { mapProjectResponse, Project } from '../model/project.model';
import { ApiProjectService } from '../../api/services';

@Injectable()
export class ProjectService {
  private apiProjectService = inject(ApiProjectService);

  get$(code: ProjectCode): Observable<Project> {
    return this.apiProjectService
      .getProject$Json({ code })
      .pipe(map(mapProjectResponse));
  }
}
