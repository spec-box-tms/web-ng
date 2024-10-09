import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Tokens } from 'marked';
import { highlight, languages } from 'prismjs';
import { RendererBase } from '../renderer-base';

@Component({
  selector: 'app-prism-renderer',
  standalone: true,
  templateUrl: './prism-renderer.component.html',
  styleUrl: './prism-renderer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrismRendererComponent extends RendererBase<Tokens.Code> {
  private sanitizer = inject(DomSanitizer);

  highlighted = computed(() => {
    const { text, lang } = this.token();

    if (!lang) {
      return null;
    }

    const grammar = languages[lang];
    if (!grammar) {
      return null;
    }

    const html = highlight(text, languages[lang], lang);

    return this.sanitizer.bypassSecurityTrustHtml(html);
  });
}
