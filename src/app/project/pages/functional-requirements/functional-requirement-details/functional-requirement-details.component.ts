import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TuiTitle } from '@taiga-ui/core';
import { combineLatest, map, startWith, switchMap } from 'rxjs';
import { ProjectContext } from '../../../project-context.service';
import { FeatureService } from '../../../services/feature.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TuiSkeleton } from '@taiga-ui/kit';

@Component({
  selector: 'app-functional-requirement-details',
  standalone: true,
  imports: [TuiTitle, TuiSkeleton],
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
