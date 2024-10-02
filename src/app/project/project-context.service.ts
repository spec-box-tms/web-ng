import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay, switchMap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ProjectService } from './project.service';
import { ProjectCode } from '../model/ids/project-code';
import { UserService } from './user.service';

export class ProjectContext {
  private authService = inject(AuthService);
  private activeRoute = inject(ActivatedRoute);
  private userService = inject(UserService);
  private projectService = inject(ProjectService);

  user$ = this.authService.user$.pipe(
    switchMap(() => this.userService.get$()),
    shareReplay(1)
  );

  projectCode$ = this.activeRoute.params.pipe(
    map(({ projectCode }) => ProjectCode(projectCode)),
    shareReplay(1)
  );

  project$ = this.projectCode$.pipe(
    switchMap((code) => this.projectService.get$(code)),
    shareReplay(1)
  );
}
