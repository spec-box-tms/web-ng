import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersComponent { }
