import { Component, signal } from '@angular/core';
import { TuiChevron } from '@taiga-ui/kit';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
  standalone: true,
  imports: [TuiNavigation, TuiChevron],
  selector: 'app-project-side-menu',
  templateUrl: 'project-side-menu.component.html',
  styleUrl: 'project-side-menu.component.scss',
})
export class ProjectSideMenuComponent {
  readonly expanded = signal(false);

  toggleExpanded() {
    this.expanded.set(!this.expanded());
  }
}
