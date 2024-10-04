import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiBlockStatus } from '@taiga-ui/layout';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [TuiBlockStatus, RouterLink],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}
