import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TeamService } from '../../../team.service';
import { AsyncPipe } from '@angular/common';
import { TuiLink } from '@taiga-ui/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiSkeleton } from '@taiga-ui/kit';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-teams',
  standalone: true,
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, TuiLink, RouterLink, RouterLinkActive, TuiSkeleton],
})
export class TeamsComponent {
  readonly teams = toSignal(inject(TeamService).getTeams$());
}
