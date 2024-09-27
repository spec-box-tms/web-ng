import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TeamUser } from '../../../model/team-user.model';
import { MemberNameComponent } from './member-name/member-name.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-member-item',
  standalone: true,
  imports: [MemberNameComponent, DatePipe],
  templateUrl: './member-item.component.html',
  styleUrl: './member-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberItemComponent {
  teamUser = input.required<TeamUser>();
}
