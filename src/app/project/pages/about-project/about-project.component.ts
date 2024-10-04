import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TuiSkeleton } from '@taiga-ui/kit';
import { ProjectContext } from '../../project-context.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-about-project',
  standalone: true,
  imports: [TuiSkeleton, DatePipe],
  templateUrl: './about-project.component.html',
  styleUrl: './about-project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutProjectComponent {
  project = toSignal(inject(ProjectContext).project$);

  versions = computed(() => {
    const project = this.project();
    if (!project) {
      return null;
    }
    const versions = [...project.versions];
    versions.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
    return versions;
  });
}
