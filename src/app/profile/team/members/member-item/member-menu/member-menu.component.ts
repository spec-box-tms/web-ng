import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { TuiButton, TuiDataList, TuiDropdown, TuiIcon } from '@taiga-ui/core';
import { TuiStep } from '@taiga-ui/kit';
import { of, switchMap } from 'rxjs';
import { AuthService } from '../../../../../auth/auth.service';
import { ConfirmService } from '../../../../../core/confirm.service';
import { NotificationService } from '../../../../../core/notification.service';
import { TeamUser } from '../../../../model/team-user.model';
import { TeamService } from '../../../../team.service';
import { TeamContextService } from '../../../team-context.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-member-menu',
  standalone: true,
  imports: [TuiDropdown, TuiDataList, TuiButton, TuiIcon, TuiStep],
  templateUrl: './member-menu.component.html',
  styleUrl: './member-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberMenuComponent {
  private readonly user = toSignal(inject(AuthService).user$);
  private readonly notificationService = inject(NotificationService);
  private readonly confirmService = inject(ConfirmService);
  private readonly teamService = inject(TeamService);
  private readonly router = inject(Router);

  readonly isAdmin = toSignal(inject(TeamContextService).isAdmin$);
  readonly teamUser = input.required<TeamUser>();
  readonly isCurrentUser = computed(
    () => this.user() === this.teamUser().user.login
  );
  readonly removeButtonText = computed(() =>
    this.isCurrentUser() ? 'Покинуть команду' : 'Исключить участника'
  );

  open = false;

  removeMember() {
    const teamUser = this.teamUser();
    const isCurrentUser = this.isCurrentUser();
    const title = isCurrentUser ? 'Покинуть команду' : 'Исключить участника';
    const message = isCurrentUser
      ? 'Вы уверены, что хотите покинуть команду?'
      : `Исключить ${teamUser.user.name}`;

    this.confirmService
      .show(message, title, 'Подтвердить')
      .pipe(
        switchMap((confirm) => {
          if (confirm) {
            return this.teamService.removeMember$(
              teamUser.teamId,
              teamUser.user.login
            );
          }
          return of(false);
        })
      )
      .subscribe({
        next: (result) => {
          if (result) {
            if (isCurrentUser) {
              this.notificationService.show('success', 'Вы покинули команду');
              this.router.navigate(['/profile']);
            } else {
              this.notificationService.show('success', 'Пользователь исключен');
            }
          }
        },
        error: (error) => {
          if (error.status === 400) {
            this.notificationService.show(
              'warning',
              'Невозможно исключить единственного администратора',
              'Ошибка'
            );
          } else {
            this.notificationService.show(
              'error',
              'Неизвестная ошибка',
              'Ошибка'
            );
          }
        },
      });
  }

  makeAdmin() {
    this.changeRole(true);
  }

  makeRegular() {
    this.changeRole(false);
  }

  private changeRole(isAdmin: boolean) {
    const teamUser = this.teamUser();
    this.teamService
      .updateMember$(teamUser.teamId, teamUser.user.login, isAdmin)
      .subscribe({
        next: (result) => {
          if (result.isAdmin) {
            this.notificationService.show(
              'success',
              `Пользователь ${teamUser.user.name} теперь администратор`
            );
          } else {
            this.notificationService.show(
              'success',
              `Пользователь ${teamUser.user.name} теперь участник`
            ); 
          }
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 400) {
            this.notificationService.show(
              'warning',
              'В команде должен быть хотя бы один администратор'
            );
          } else {
            this.notificationService.show('error', 'Произошла ошибка');
          }
        },
      });
  }
}
