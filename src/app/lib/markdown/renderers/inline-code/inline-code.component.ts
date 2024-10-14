/* eslint-disable @angular-eslint/component-selector */
import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Tokens } from 'marked';
import { NotificationService } from '../../../../core/notification.service';
import { RendererBase } from '../renderer-base';
@Component({
  selector: 'code[mdInlineCode]',
  standalone: true,
  templateUrl: './inline-code.component.html',
  styleUrl: './inline-code.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(click)': 'copyToClipboard()',
  },
})
export class InlineCodeComponent extends RendererBase<Tokens.Codespan> {
  private readonly notificationService = inject(NotificationService, {
    optional: true,
  });
  private readonly clipboard = inject(Clipboard);

  copyToClipboard() {
    this.notificationService?.show(
      'info',
      'Значение скопировано в буфер обмена'
    );
    this.clipboard.copy(this.token().text);
  }
}
