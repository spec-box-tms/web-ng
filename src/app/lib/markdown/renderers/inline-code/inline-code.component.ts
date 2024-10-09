import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RendererBase } from '../renderer-base';
import { Tokens } from 'marked';
import { NotificationService } from '../../../../core/notification.service';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-inline-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inline-code.component.html',
  styleUrl: './inline-code.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineCodeComponent extends RendererBase<Tokens.Codespan> {
  private readonly notificationService = inject(NotificationService, { optional: true });
  private readonly clipboard = inject(Clipboard);
  
  copyToClipboard() {
    this.notificationService?.show(
      'info',
      'Значение скопировано в буфер обмена'
    );
    this.clipboard.copy(this.token().text);
  }
}
