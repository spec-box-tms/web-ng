import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  TuiButton,
  TuiDataList,
  TuiDropdown,
  TuiIcon,
  TuiLink,
  TuiScrollbar,
} from '@taiga-ui/core';
import { TuiChevron, TuiSkeleton } from '@taiga-ui/kit';
import { TuiNavigation } from '@taiga-ui/layout';
import { LogoComponent } from '../../core/logo/logo.component';
import { ProjectVersion } from '../../model/project-version.model';
import { ProjectContext } from '../project-context.service';
import { CurrentUserComponent } from './current-user/current-user.component';
import { ProjectSideMenuComponent } from './project-side-menu/project-side-menu.component';

@Component({
  standalone: true,
  imports: [
    TuiNavigation,
    ProjectSideMenuComponent,
    LogoComponent,
    CurrentUserComponent,
    RouterLink,
    TuiLink,
    RouterLink,
    TuiButton,
    TuiChevron,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    TuiSkeleton,
    TuiScrollbar,
  ],
  selector: 'app-project-navigation',
  templateUrl: 'project-navigation.component.html',
  styleUrl: 'project-navigation.component.scss',
})
export class ProjectNavigationComponent {
  private readonly projectContext = inject(ProjectContext);
  readonly route = inject(ActivatedRoute);
  readonly projectIdentity = toSignal(this.projectContext.projectIdentity$);
  readonly project = toSignal(this.projectContext.project$);

  readonly versions = computed(() => {
    const project = this.project();
    const projectIdentity = this.projectIdentity();
    if (!project || !projectIdentity) {
      return null;
    }
    const activeVersion = project.versions.find(
      (v) => v.version === projectIdentity.version
    );
    if (!activeVersion) {
      return null;
    }

    const versions = [...project.versions];
    if (versions.indexOf(activeVersion) <= 0) {
      versions.push(activeVersion);
    }
    versions.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
    return versions.slice(0, 10);
  });

  readonly displayMore = computed(
    () => (this.project()?.versions.length || 0) > 10
  );

  isActiveVersion({ version }: ProjectVersion): boolean {
    return version === this.projectIdentity()?.version;
  }
}
