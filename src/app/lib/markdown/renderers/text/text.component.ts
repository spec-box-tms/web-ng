import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Tokens } from 'marked';
import { RendererBase } from '../renderer-base';

@Component({
  selector: 'app-text',
  standalone: true,
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent extends RendererBase<Tokens.Text> {}
