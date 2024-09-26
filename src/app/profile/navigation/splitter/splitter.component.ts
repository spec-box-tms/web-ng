import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-splitter',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: '',
  styleUrl: './splitter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitterComponent { }
