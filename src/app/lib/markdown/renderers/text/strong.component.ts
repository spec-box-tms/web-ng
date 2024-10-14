/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Tokens } from 'marked';
import { BaseText } from './base-text';
import { ForTokenDirective } from '../forToken.directive';

@Component({
  selector: 'strong[mdStrong]',
  standalone: true,
  templateUrl: './text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ForTokenDirective],
})
export class StrongComponent extends BaseText<Tokens.Strong> {}
