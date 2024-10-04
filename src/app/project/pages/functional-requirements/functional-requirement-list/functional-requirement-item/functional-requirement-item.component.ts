import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TuiCell } from '@taiga-ui/layout';
import { Feature } from '../../../../model/feature.model';
import { TuiIcon, TuiTitle } from '@taiga-ui/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-functional-requirement-item',
  standalone: true,
  imports: [TuiCell, TuiIcon, TuiTitle, RouterLink, RouterLinkActive],
  templateUrl: './functional-requirement-item.component.html',
  styleUrl: './functional-requirement-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalRequirementItemComponent {
  feature = input.required<Feature>();
}
