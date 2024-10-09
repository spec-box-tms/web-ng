import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Injector,
  input,
  ViewContainerRef,
} from '@angular/core';
import { Token } from 'marked';
import { MarkdownService } from '../markdown.service';
import { GenericRendererComponent } from '../renderers/generic-renderer/generic-renderer.component';

@Component({
  selector: 'app-markdown-token-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './markdown-token-renderer.component.html',
  styleUrl: './markdown-token-renderer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownTokenRendererComponent {
  private readonly injector = inject(Injector);
  private readonly markdownService = inject(MarkdownService);

  tokens = input<Token[]>();

  constructor(private viewContainer: ViewContainerRef) {
    effect(() => {
      this.render(this.tokens());
    });
  }

  private render(tokens: Token[] | undefined) {
    this.viewContainer.clear();
    (this.viewContainer.element.nativeElement as HTMLElement).innerHTML = '';
    if (tokens) {
      for (const token of tokens) {
        this.renderToken(token);
      }
    }
  }

  private renderToken(token: Token) {
    const renderer =
      this.markdownService.getRenderer(token.type) ?? GenericRendererComponent;

    const componentRef = this.viewContainer.createComponent(renderer, {
      injector: this.injector,
    });
    componentRef.setInput('token', token);
    componentRef.changeDetectorRef.markForCheck();
  }
}
