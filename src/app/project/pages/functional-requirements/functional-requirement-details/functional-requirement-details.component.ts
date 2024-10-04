import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Injector,
  INJECTOR,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TuiTitle } from '@taiga-ui/core';
import { combineLatest, map, startWith, switchMap } from 'rxjs';
import { ProjectContext } from '../../../project-context.service';
import { FeatureService } from '../../../services/feature.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TuiSkeleton } from '@taiga-ui/kit';
import { TUI_EDITOR_EXTENSIONS } from '@taiga-ui/editor';

@Component({
  selector: 'app-functional-requirement-details',
  standalone: true,
  imports: [TuiTitle, TuiSkeleton],
  templateUrl: './functional-requirement-details.component.html',
  styleUrl: './functional-requirement-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_EDITOR_EXTENSIONS,
      deps: [INJECTOR],
      useFactory: (injector: Injector) => [
        import('@tiptap/starter-kit').then(({ StarterKit }) => StarterKit),
        import('@taiga-ui/editor').then(({ tuiCreateImageEditorExtension }) =>
          tuiCreateImageEditorExtension({ injector })
        ),
        import('@taiga-ui/editor').then(({ TuiMarkdown }) =>
          TuiMarkdown.configure({
            html: true, // Allow HTML input/output
            tightLists: true, // No <p> inside <li> in markdown output
            tightListClass: 'tight', // Add class to <ul> allowing you to remove <p> margins when tight
            bulletListMarker: '-', // <li> prefix in markdown output
            linkify: true, // Create links from "https://..." text
            breaks: true, // New lines (\n) in markdown input are converted to <br>
            transformPastedText: true, // Allow to paste markdown text in the editor
            transformCopiedText: true, // Copied text is transformed to markdown
          })
        ),
      ],
    },
  ],
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
