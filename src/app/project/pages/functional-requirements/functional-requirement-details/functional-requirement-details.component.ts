import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { TuiTitle } from '@taiga-ui/core';
import { TuiSkeleton } from '@taiga-ui/kit';
import { combineLatest, map, startWith, switchMap } from 'rxjs';
import { MarkdownComponent } from '../../../../lib/markdown/markdown.component';
import { ProjectContext } from '../../../project-context.service';
import { FeatureService } from '../../../services/feature.service';

@Component({
  selector: 'app-functional-requirement-details',
  standalone: true,
  imports: [TuiTitle, TuiSkeleton, MarkdownComponent],
  templateUrl: './functional-requirement-details.component.html',
  styleUrl: './functional-requirement-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalRequirementDetailsComponent {
  private readonly featureCode$ = inject(ActivatedRoute).params.pipe(
    map(({ code }) => code)
  );
  private readonly projectIdentity$ = inject(ProjectContext).projectIdentity$;
  private readonly featureService = inject(FeatureService);

  readonly feature = toSignal(
    combineLatest([this.featureCode$, this.projectIdentity$]).pipe(
      switchMap(([featureCode, { code, version }]) =>
        this.featureService
          .get$(code, version, featureCode)
          .pipe(startWith(null))
      )
    )
  );
}
