import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-logo',
  templateUrl: 'logo.component.html',
})
export class LogoComponent {
  readonly size = input(16);
}
