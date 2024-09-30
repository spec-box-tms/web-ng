import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { TeamProjectsService } from '../../team-projects.service';
import { TeamContextService } from '../team-context.service';
import { TuiSkeleton } from '@taiga-ui/kit';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TuiSkeleton],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  private readonly teamContext = inject(TeamContextService);
  private readonly teamProjectsService = inject(TeamProjectsService);

  projects = toSignal(
    this.teamContext.teamId$.pipe(
      switchMap((teamId) => this.teamProjectsService.list$(teamId))
    )
  );
}
