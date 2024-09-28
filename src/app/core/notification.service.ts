import { inject, Injectable } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';

type NotificationType = 'success' | 'warning' | 'error';

@Injectable()
export class NotificationService {
  private readonly alertService = inject(TuiAlertService);

  show(type: NotificationType, message: string, title?: string) {
    this.alertService
      .open(message, {
        label: title,
        appearance: type,
      })
      .subscribe();
  }
}
