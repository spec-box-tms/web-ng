import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { ProjectContext } from '../../project-context.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TuiLink } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-current-user',
  standalone: true,
  imports: [TuiAvatar, TuiLink, RouterLink],
  templateUrl: './current-user.component.html',
  styleUrl: './current-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentUserComponent {
  private projectContext = inject(ProjectContext);

  user = toSignal(this.projectContext.user$);
}
