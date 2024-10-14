import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { MarkdownService } from './markdown.service';
import { ForTokenDirective } from './renderers/forToken.directive';
import { provideMarkdown } from './renderers/provide-markdown';

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [ForTokenDirective],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ...provideMarkdown()
  ]
})
export class MarkdownComponent {
  private myMarkdownService = inject(MarkdownService);

  value = input.required<string>();

  tokens = computed(() => this.myMarkdownService.parse(this.value()));
}
