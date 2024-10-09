import { Routes } from '@angular/router';
import { PageProjectComponent } from './page-project/page-project.component';
import { AboutProjectComponent } from './pages/about-project/about-project.component';
import { FunctionalRequirementsComponent } from './pages/functional-requirements/functional-requirements.component';
import { FunctionalRequirementDetailsComponent } from './pages/functional-requirements/functional-requirement-details/functional-requirement-details.component';
import { FunctionalRequirementPreviewComponent } from './pages/functional-requirements/functional-requirement-preview/functional-requirement-preview.component';

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
        children: [
          {
            path: ':code',
            component: FunctionalRequirementPreviewComponent,
          },
        ],
      },
    ],
  },
];
