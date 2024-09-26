import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';
import { TeamService } from '../../../team.service';
import { AsyncPipe } from '@angular/common';
import { TuiLink } from '@taiga-ui/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-teams',
  standalone: true,
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, TuiLink, RouterLink, RouterLinkActive]
})
export class TeamsComponent {
  private readonly teamService = inject(TeamService);

  readonly teams$ = this.teamService.getTeams$();
}
