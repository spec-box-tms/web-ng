import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiLink, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiSkeleton } from '@taiga-ui/kit';
import { ProfileService } from '../../../profile.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [TuiAvatar, TuiLink, TuiSkeleton, AsyncPipe, RouterLink, TuiTitle],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  profile = toSignal(inject(ProfileService).profile$);
}
