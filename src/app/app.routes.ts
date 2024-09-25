import { Routes } from '@angular/router';
import { guardAuth } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Spec Box TMS - Аутентификация',
    loadComponent: () =>
      import('./auth/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'register',
    title: 'Spec Box TMS - Регистрация',
    loadComponent: () =>
      import('./auth/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
  {
    path: 'profile',
    title: 'Spec Box TMS - Профиль пользователя',
    loadChildren: () =>
      import('./profile/profile.routes').then((c) => c.routes),
    canActivate: [guardAuth],
  },
  {
    path: 'project',
    title: 'Spec Box TMS - Проект',
    loadComponent: () =>
      import('./project/page-project/page-project.component').then(
        (c) => c.PageProjectComponent
      ),
    canActivate: [guardAuth],
  },
  {
    path: '**',
    title: 'Spec Box TMS - Страница не найдена',
    loadComponent: () =>
      import('./core/page-not-found/page-not-found.component').then(
        (c) => c.PageNotFoundComponent
      ),
  },
];
