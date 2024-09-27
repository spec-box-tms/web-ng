import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiBadge } from '@taiga-ui/kit';
import { AuthService } from '../../../../../auth/auth.service';
import { TeamUser } from '../../../../model/team-user.model';

@Component({
  selector: 'app-member-name',
  standalone: true,
  imports: [TuiTitle, TuiBadge, TuiAvatar],
  templateUrl: './member-name.component.html',
  styleUrl: './member-name.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberNameComponent {
  private readonly currentUser = toSignal(inject(AuthService).user$);

  teamUser = input.required<TeamUser>();

  isCurrentUser = computed(
    () => this.currentUser() === this.teamUser().user.login
  );
}
