import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TuiTitle } from '@taiga-ui/core';
import { TuiSkeleton } from '@taiga-ui/kit';
import { TuiTextareaModule } from '@taiga-ui/legacy';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { combineLatest, map, startWith, switchMap } from 'rxjs';
import { ProjectContext } from '../../../project-context.service';
import { FeatureService } from '../../../services/feature.service';
import { MarkdownComponent } from '../../../../lib/markdown/markdown.component';

@Component({
  selector: 'app-functional-requirement-preview',
  standalone: true,
  imports: [
    FormsModule,
    TuiTitle,
    TuiSkeleton,
    MarkdownComponent, 
    TuiTextareaModule,
    MonacoEditorModule,
  ],
  templateUrl: './functional-requirement-preview.component.html',
  styleUrl: './functional-requirement-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalRequirementPreviewComponent {
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

  editorOptions = {theme: 'vs-light', language: 'markdown', minimap: { enabled: false } };

  description = signal('');

  constructor() {
    effect(() => {
      const description = this.feature()?.description || '';
      untracked(() => {
        this.description.set(description);
      });
    });
  }
}
