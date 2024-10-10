/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RendererBase } from '../renderer-base';
import { Tokens } from 'marked';
import { MarkdownTokenRendererComponent } from "../../markdown-token-renderer/markdown-token-renderer.component";

@Component({
  selector: 'p[appParagraph]',
  standalone: true,
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MarkdownTokenRendererComponent],
})
export class ParagraphComponent extends RendererBase<Tokens.Paragraph> {}
