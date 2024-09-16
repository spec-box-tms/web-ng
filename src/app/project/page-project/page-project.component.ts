import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterOutlet } from '@angular/router';
import { ProjectService } from '../../../api/services';

@Component({
  selector: 'app-page-project',
  standalone: true,
  imports: [CommonModule, NavigationComponent, RouterOutlet, AsyncPipe],
  templateUrl: './page-project.component.html',
  styleUrl: './page-project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageProjectComponent {
  private projectService = inject(ProjectService);

  projects$ = this.projectService.listProjects$Json();
}
