import { Routes } from '@angular/router';
import { PageProjectComponent } from './page-project/page-project.component';
import { AboutProjectComponent } from './pages/about-project/about-project.component';
import { FunctionalRequirementsComponent } from './pages/functional-requirements/functional-requirements.component';

export const routes: Routes = [
  {
    path: ':projectCode/:version',
    component: PageProjectComponent,
    children: [
      {
        path: '',
        title: 'Spec Box TMS - О проекте',
        component: AboutProjectComponent,
      },
      {
        path: 'functional',
        title: 'Spec Box TMS - Функциональные требования',
        component: FunctionalRequirementsComponent,
      },
    ],
  },
];
