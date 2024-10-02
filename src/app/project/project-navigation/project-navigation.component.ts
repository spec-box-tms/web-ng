import { Component, inject } from '@angular/core';
import { TuiNavigation } from '@taiga-ui/layout';
import { ProjectSideMenuComponent } from './project-side-menu/project-side-menu.component';
import { LogoComponent } from '../../core/logo/logo.component';
import { ProjectContext } from '../project-context.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CurrentUserComponent } from "./current-user/current-user.component";

@Component({
  standalone: true,
  imports: [TuiNavigation, ProjectSideMenuComponent, LogoComponent, CurrentUserComponent],
  selector: 'app-project-navigation',
  templateUrl: 'project-navigation.component.html',
  styleUrl: 'project-navigation.component.scss',
})
export class ProjectNavigationComponent {
  private projectContext = inject(ProjectContext);

  project = toSignal(this.projectContext.project$);
}
