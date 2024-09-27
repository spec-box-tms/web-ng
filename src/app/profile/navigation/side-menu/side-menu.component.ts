import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiLink } from '@taiga-ui/core';
import { TeamsComponent } from './teams/teams.component';
import { UserCardComponent } from './user-card/user-card.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SplitterComponent } from '../splitter/splitter.component';
import { CreateTeamComponent } from '../../create-team/create-team.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    TuiLink,
    TeamsComponent,
    UserCardComponent,
    RouterLink,
    RouterLinkActive,
    CreateTeamComponent,
    SplitterComponent,
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {}
