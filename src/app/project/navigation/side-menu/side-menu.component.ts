import { Component, signal } from '@angular/core';
import { TuiChevron } from '@taiga-ui/kit';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
  standalone: true,
  imports: [TuiNavigation, TuiChevron],
  selector: 'app-side-menu',
  templateUrl: 'side-menu.component.html',
  styleUrl: 'side-menu.component.scss',
})
export class SideMenuComponent {
  readonly expanded = signal(false);

  toggleExpanded() {
    this.expanded.set(!this.expanded());
  }
}
