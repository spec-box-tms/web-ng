import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProfileService } from '../profile.service';
import { TeamService } from '../team.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-profile',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet],
  providers: [TeamService, ProfileService],
  templateUrl: './page-profile.component.html',
  styleUrl: './page-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageProfileComponent {}
