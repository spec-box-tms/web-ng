import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay, switchMap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ProjectService } from './project.service';
import { ProjectCode } from '../model/ids/project.code';
import { UserService } from './user.service';
import { ProjectVersionIdent } from '../model/ids/project-version-ident';

@Injectable()
export class ProjectContext {
  private authService = inject(AuthService);
  private activeRoute = inject(ActivatedRoute);
  private userService = inject(UserService);
  private projectService = inject(ProjectService);

  user$ = this.authService.user$.pipe(
    switchMap(() => this.userService.get$()),
    shareReplay(1)
  );

  projectIdentity$ = this.activeRoute.params.pipe(
    map(({ projectCode, version }) => ({
      code: ProjectCode(projectCode),
      version: ProjectVersionIdent(version),
    })),
    shareReplay(1)
  );

  project$ = this.projectIdentity$.pipe(
    switchMap(({ code }) => this.projectService.get$(code)),
    shareReplay(1)
  );
}
