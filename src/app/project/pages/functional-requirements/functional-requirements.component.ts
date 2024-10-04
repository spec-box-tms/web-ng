import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FeatureService } from '../../services/feature.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-functional-requirements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './functional-requirements.component.html',
  styleUrl: './functional-requirements.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalRequirementsComponent {
  readonly features = toSignal(inject(FeatureService).features$);
}
