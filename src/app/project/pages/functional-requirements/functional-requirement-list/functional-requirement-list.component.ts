import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FeatureService } from '../../../services/feature.service';
import { FunctionalRequirementItemComponent } from './functional-requirement-item/functional-requirement-item.component';

@Component({
  selector: 'app-functional-requirement-list',
  standalone: true,
  imports: [FunctionalRequirementItemComponent],
  templateUrl: './functional-requirement-list.component.html',
  styleUrl: './functional-requirement-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalRequirementListComponent {
  readonly features = toSignal(inject(FeatureService).features$);
}
