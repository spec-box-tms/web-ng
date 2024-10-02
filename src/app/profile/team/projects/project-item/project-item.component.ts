import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { Project } from '../../../../model/project.model';
import { TuiBadge, TuiTile } from '@taiga-ui/kit';
import { TuiLink } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [DatePipe, TuiBadge, TuiTile, TuiLink, RouterLink],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectItemComponent {
  project = input.required<Project>();

  latestVersion = computed(() => {
    const project = this.project();
    return project.versions[project.versions.length - 1];
  });
}
