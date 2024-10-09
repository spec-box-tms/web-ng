import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Tokens } from 'marked';
import { RendererBase } from '../renderer-base';
import { MarkdownTokenRendererComponent } from '../../markdown-token-renderer/markdown-token-renderer.component';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [MarkdownTokenRendererComponent],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadingComponent extends RendererBase<Tokens.Heading> {}
