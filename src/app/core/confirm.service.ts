import { inject, Injectable } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { TUI_CONFIRM, TuiConfirmData } from '@taiga-ui/kit';
import { Observable } from 'rxjs';

@Injectable()
export class ConfirmService {
  private readonly dialogService = inject(TuiDialogService);

  show(
    content: string,
    title: string,
    yes = 'Ok',
    no = 'Отмена'
  ): Observable<boolean> {
    const data: TuiConfirmData = {
      content,
      yes,
      no,
    };

    return this.dialogService.open(TUI_CONFIRM, {
      label: title,
      size: 's',
      data,
    });
  }
}
