import { Directive, input, InputSignal } from '@angular/core';
import { Token } from 'marked';

export interface AnyTokenRenderer {
  token: InputSignal<any>;
}

@Directive()
export class RendererBase<T extends Token> {
  token = input.required<T>();
}
