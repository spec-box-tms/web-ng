import { TuiRoot } from '@taiga-ui/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectService } from '../api/services';
import { map, of } from 'rxjs';
import { NavigationComponent } from './layout/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe, TuiRoot, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private projectService = inject(ProjectService);

  projects$ = this.projectService.listProjects$Json().pipe(
    map((projects) => {
      console.log(projects);
      return projects.map((p) => p.title);
    })
  );
}
