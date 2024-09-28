import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { TuiSkeleton, TuiTabs } from '@taiga-ui/kit';
import { map, switchMap } from 'rxjs';
import { TeamId } from '../../lib/model/ids/team.id';
import { TeamService } from '../team.service';
import { TeamContextService } from './team-context.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [TuiTabs, RouterLink, RouterLinkActive, RouterOutlet, TuiSkeleton],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TeamContextService],
})
export class TeamComponent {
  private teamService = inject(TeamService);
  private readonly teamId$ = inject(ActivatedRoute).params.pipe(
    map(({ teamId }) => TeamId(teamId))
  );

  team = toSignal(
    this.teamId$.pipe(switchMap((teamId) => this.teamService.getTeam$(teamId)))
  );
}
