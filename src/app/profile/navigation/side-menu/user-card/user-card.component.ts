import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiLink } from '@taiga-ui/core';
import { TuiAvatar, TuiSkeleton } from '@taiga-ui/kit';
import { ProfileService } from '../../../profile.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [TuiAvatar, TuiLink, TuiSkeleton, AsyncPipe, RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  private readonly profileService = inject(ProfileService);

  profile$ = this.profileService.profile$;
}
