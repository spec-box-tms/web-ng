import { Routes } from '@angular/router';
import { PageProjectComponent } from './page-project/page-project.component';

export const routes: Routes = [
  {
    path: ':projectCode',
    title: 'Spec Box TMS - Проект',
    component: PageProjectComponent,
  },
];
