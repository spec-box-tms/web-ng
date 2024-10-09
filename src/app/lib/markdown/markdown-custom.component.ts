import {
  Component,
  computed,
  EnvironmentInjector,
  inject,
  input,
} from '@angular/core';
import { MarkdownTokenRendererComponent } from './markdown-token-renderer/markdown-token-renderer.component';
import { MarkdownService } from './markdown.service';

@Component({
  selector: 'app-markdown-custom',
  imports: [MarkdownTokenRendererComponent],
  template: `<app-markdown-token-renderer [tokens]="tokens()" />`,
  standalone: true,
})
export class MarkdownCustomComponent {
  private readonly markdownService = inject(MarkdownService);
  readonly value = input.required<string>();

  readonly tokens = computed(() => this.markdownService.parse(this.value()));
}
