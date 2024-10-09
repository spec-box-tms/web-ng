import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  inject,
} from '@angular/core';
import { Token } from 'marked';
import { RendererBase } from '../renderer-base';
import { MarkdownService } from '../../markdown.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-generic-renderer',
  standalone: true,
  templateUrl: './generic-renderer.component.html',
  styleUrl: './generic-renderer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericRendererComponent extends RendererBase<Token> {
  private markdownService = inject(MarkdownService);
  private sanitizer = inject(DomSanitizer);

  @HostBinding('innerHtml')
  get htmlContent() {
    return this.sanitizer.bypassSecurityTrustHtml(
      this.markdownService.genericParser(this.token())
    );
  }
}
