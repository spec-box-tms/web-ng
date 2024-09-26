import { Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LatestComponent } from './latest/latest.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { TeamComponent } from './team/team.component';
import { ProjectsComponent } from './team/projects/projects.component';
import { MembersComponent } from './team/members/members.component';
import { OptionsComponent } from './team/options/options.component';

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
        title: 'Spec Box TMS - Команда',
        component: TeamComponent,
        children: [
          {
            path: 'projects',
            title: 'Spec Box TMS - Команда - Проекты',
            component: ProjectsComponent,
          },
          {
            path: 'members',
            title: 'Spec Box TMS - Команда - Участники',
            component: MembersComponent,
          },
          {
            path: 'options',
            title: 'Spec Box TMS - Команда - Настройки',
            component: OptionsComponent,
          },
          {
            path: '**',
            redirectTo: 'projects',
          },
        ],
      },
    ],
  },
];
