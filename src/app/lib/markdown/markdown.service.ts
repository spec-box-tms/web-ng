import { Injectable } from '@angular/core';
import { marked, Token, TokensList } from 'marked';
import { internalLinkTokenizer } from './extensions/internal-link';

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

  constructor() {
    marked.use({ extensions: [internalLinkTokenizer] });
  }

  parse(markdown: string): TokensList {
    const tokens = marked.lexer(markdown);
    return tokens;
  }

  genericParser(token: Token): string {
    if (this.inlineTokenTypes.has(token.type)) {
      return marked.Parser.parseInline([token]);
    }
    return marked.Parser.parse([token]);
  }
}
