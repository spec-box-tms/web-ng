import {
  ChangeDetectionStrategy,
  Component,
  inject,
  INJECTOR,
} from '@angular/core';
import { TuiDialogService, TuiLink } from '@taiga-ui/core';
import { CreateTeamFormComponent } from './create-team-form/create-team-form.component';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';

@Component({
  selector: 'app-create-team',
  standalone: true,
  imports: [TuiLink, CreateTeamFormComponent],
  templateUrl: './create-team.component.html',
  styleUrl: './create-team.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTeamComponent {
  private dialogService = inject(TuiDialogService);
  private injector = inject(INJECTOR);

  showDialog() {
    this.dialogService
      .open(new PolymorpheusComponent(CreateTeamFormComponent, this.injector), {
        dismissible: true,
        label: 'Создать команду'
      })
      .subscribe();
  }
}
