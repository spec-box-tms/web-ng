import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { MermaidService } from './mermaid.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-mermaid',
  standalone: true,
  templateUrl: './mermaid.component.html',
  styleUrl: './mermaid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MermaidComponent {
  private mermaidService = inject(MermaidService);
  private sanitizer = inject(DomSanitizer);

  code = input.required<string>();
  html = signal<SafeHtml>('');

  constructor() {
    effect(() => {
      const code = this.code();

      this.mermaidService.renderMermaid('foo', code).subscribe({
        next: ({ svg }) => {
          console.log(svg);
          
          this.html.set(this.sanitizer.bypassSecurityTrustHtml(svg));
        },
        error: () => {
          this.html.set(
            this.sanitizer.bypassSecurityTrustHtml(
              'Ошибка визуализации диаграммы'
            )
          );
        },
      });
    });
  }
}
