import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { TuiButton } from '@taiga-ui/core';
import { TuiSkeleton } from '@taiga-ui/kit';
import { map, switchMap } from 'rxjs';
import { TeamId } from '../../../lib/model/ids/team.id';
import { TeamService } from '../../team.service';
import { MemberItemComponent } from './member-item/member-item.component';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [MemberItemComponent, TuiButton, TuiSkeleton],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersComponent {
  private readonly teamId$ = inject(ActivatedRoute).parent!.params.pipe(
    map(({ teamId }) => TeamId(teamId))
  );

  members = toSignal(
    this.teamId$.pipe(
      switchMap((teamId) => inject(TeamService).getMembers$(teamId))
    )
  );
}
