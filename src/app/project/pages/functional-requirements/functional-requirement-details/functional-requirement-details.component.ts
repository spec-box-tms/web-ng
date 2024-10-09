import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  Injector,
  INJECTOR,
  untracked,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TuiTitle } from '@taiga-ui/core';
import { combineLatest, map, startWith, switchMap } from 'rxjs';
import { ProjectContext } from '../../../project-context.service';
import { FeatureService } from '../../../services/feature.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TuiSkeleton } from '@taiga-ui/kit';
import {
  TUI_EDITOR_EXTENSIONS,
  TUI_EDITOR_VALUE_TRANSFORMER,
  TuiEditor,
  TuiEditorSocket,
  TuiEditorTool,
} from '@taiga-ui/editor';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiValueTransformer } from '@taiga-ui/cdk';

@Component({
  selector: 'app-functional-requirement-details',
  standalone: true,
  imports: [
    TuiTitle,
    TuiSkeleton,
    ReactiveFormsModule,
    TuiEditor,
    TuiEditorSocket,
  ],
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
  
  private readonly contentProcessor = inject<
    TuiValueTransformer<string | null, string | null>
  >(TUI_EDITOR_VALUE_TRANSFORMER, { optional: true });

  readonly feature = toSignal(
    combineLatest([this.featureCode$, this.projectIdentity$]).pipe(
      switchMap(([featureCode, { code, version }]) =>
        this.featureService
          .get$(code, version, featureCode)
          .pipe(startWith(null))
      )
    )
  );

  readonly content = computed(() => {
    if(!this.contentProcessor) {
      return 'foo';
    }
    if(!this.feature()) {
      return 'boo';
    }

    return this.contentProcessor.fromControlValue(this.feature()?.description ?? null);
  });

  control = new FormControl();
  protected readonly builtInTools = [TuiEditorTool.Undo];

  constructor() {
    effect(() => {
      const feature = this.feature();
      untracked(() => {
        this.control.setValue(feature?.description || '');
      });
    });
  }
}
