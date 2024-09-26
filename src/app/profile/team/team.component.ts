import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TuiTabs } from '@taiga-ui/kit';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [TuiTabs, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {}
