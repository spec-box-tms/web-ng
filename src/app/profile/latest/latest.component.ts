import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './latest.component.html',
  styleUrl: './latest.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LatestComponent { }