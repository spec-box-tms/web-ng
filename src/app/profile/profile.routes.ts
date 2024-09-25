import { Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LatestComponent } from './latest/latest.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { TeamComponent } from './team/team.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Spec Box TMS - Недавние',
    component: PageProfileComponent,
    children: [
      {
        path: '',
        title: 'Spec Box TMS - Недавние',
        component: LatestComponent,
      },
      {
        path: 'user',
        title: 'Spec Box TMS - Профиль пользователя',
        component: EditUserComponent,
      },
      {
        path: 'favorites',
        title: 'Spec Box TMS - Избранное',
        component: FavoritesComponent,
      },
      {
        path: 'notifications',
        title: 'Spec Box TMS - Уведомления',
        component: NotificationsComponent,
      },
      {
        path: 'team/:teamId',
        title: 'Spec Box TMS - Уведомления',
        component: TeamComponent,
      },
    ],
  },
];
