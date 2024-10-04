import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TuiScrollbar, TuiSurface } from '@taiga-ui/core';
import { FunctionalRequirementListComponent } from './functional-requirement-list/functional-requirement-list.component';
import { RouterOutlet } from '@angular/router';
import { TuiCardLarge } from '@taiga-ui/layout';

@Component({
  selector: 'app-functional-requirements',
  standalone: true,
  imports: [
    FunctionalRequirementListComponent,
    TuiScrollbar,
    RouterOutlet,
    TuiCardLarge,
    TuiSurface,
  ],
  templateUrl: './functional-requirements.component.html',
  styleUrl: './functional-requirements.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalRequirementsComponent {
  showFallback = signal(false);
}
