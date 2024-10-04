import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectContext } from '../project-context.service';
import { ProjectNavigationComponent } from '../project-navigation/project-navigation.component';
import { ProjectService } from '../project.service';
import { UserService } from '../user.service';
import { FeatureService } from '../services/feature.service';

@Component({
  selector: 'app-page-project',
  standalone: true,
  imports: [ProjectNavigationComponent, RouterOutlet, JsonPipe],
  templateUrl: './page-project.component.html',
  styleUrl: './page-project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProjectContext, ProjectService, UserService, FeatureService],
})
export class PageProjectComponent {}
