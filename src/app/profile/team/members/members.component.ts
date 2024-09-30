import {
  ChangeDetectionStrategy,
  Component,
  inject,
  INJECTOR,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { TuiButton, TuiDialogService } from '@taiga-ui/core';
import { TuiSkeleton } from '@taiga-ui/kit';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { map, switchMap } from 'rxjs';
import { TeamId } from '../../../model/ids/team.id';
import { TeamService } from '../../team.service';
import { TeamContextService } from '../team-context.service';
import { AddMemberComponent } from './add-member/add-member.component';
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
  private readonly injector = inject(INJECTOR);
  private readonly dialogService = inject(TuiDialogService);
  private readonly teamId$ = inject(ActivatedRoute).parent!.params.pipe(
    map(({ teamId }) => TeamId(teamId))
  );
  isAdmin = toSignal(inject(TeamContextService).isAdmin$);

  members = toSignal(
    this.teamId$.pipe(
      switchMap((teamId) => inject(TeamService).getMembers$(teamId))
    )
  );

  showAddMemberDialog() {
    if (!this.isAdmin()) {
      return;
    }
    this.dialogService
      .open(new PolymorpheusComponent(AddMemberComponent, this.injector), {
        dismissible: true,
        label: 'Добавить участника',
      })
      .subscribe();
  }
}
