import { Injectable, Type } from '@angular/core';
import { marked, Token, TokensList } from 'marked';
import { internalLinkTokenizer } from './extensions/internal-link';
import { li } from './formatters/li.formatter';
import { ol } from './formatters/ol.formatter';
import { ul } from './formatters/ul.formatter';
import { CodeComponent } from './renderers/code/code.component';
import { HeadingComponent } from './renderers/heading/heading.component';
import { InlineCodeComponent } from './renderers/inline-code/inline-code.component';
import { InternalLinkComponent } from './renderers/internal-link/internal-link.component';
import { ParagraphComponent } from './renderers/paragraph/paragraph.component';
import { AnyTokenRenderer, RendererBase } from './renderers/renderer-base';
import { TableComponent } from './renderers/table/table.component';
import { TextComponent } from './renderers/text/text.component';

@Injectable({
  providedIn: 'root',
})
export class MarkdownService {
  private inlineTokenTypes = new Set([
    'strong',
    'em',
    'codespan',
    'br',
    'del',
    'link',
    'image',
    'text',
  ]);
  private tokenMap = new Map<string, Type<AnyTokenRenderer>>();

  constructor() {
    marked.use({ extensions: [internalLinkTokenizer] });

    this.tokenMap.set('heading', HeadingComponent);
    this.tokenMap.set('text', TextComponent);
    this.tokenMap.set('paragraph', ParagraphComponent);
    this.tokenMap.set('table', TableComponent);
    this.tokenMap.set('internalLink', InternalLinkComponent);
    this.tokenMap.set('codespan', InlineCodeComponent);
    this.tokenMap.set('code', CodeComponent);

    const renderer = new marked.Renderer();
    renderer.list = (body, ordered, start) => {
      return ordered ? ol(body, start) : ul(body);
    };
    renderer.listitem = (text, task, checked) => {
      return li(text);
    };
    marked.use({ renderer: renderer })
  }

  parse(markdown: string): TokensList {
    const tokens = marked.lexer(markdown);
    return tokens;
  }

  getRenderer(token: string): Type<RendererBase<Token>> | undefined {
    return this.tokenMap.get(token);
  }

  genericParser(token: Token): string {
    if (this.inlineTokenTypes.has(token.type)) {
      return marked.Parser.parseInline([token]);
    }
    return marked.Parser.parse([token]);
  }
}
