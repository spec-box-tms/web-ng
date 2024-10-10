import { Injectable } from '@angular/core';
import mermaid, { RenderResult } from 'mermaid';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MermaidService {
  constructor() {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'neutral',
    });
  }

  renderMermaid(id: string, definition: string): Observable<RenderResult> {
    return from(mermaid.render(id, definition));
  }
}
