import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmService } from '../../core/confirm.service';
import { NotificationService } from '../../core/notification.service';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProfileService } from '../profile.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-page-profile',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet],
  providers: [TeamService, ProfileService, ConfirmService, NotificationService],
  templateUrl: './page-profile.component.html',
  styleUrl: './page-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageProfileComponent {}
