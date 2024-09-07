import { Component } from '@angular/core';
import { TuiNavigation } from '@taiga-ui/layout';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LogoComponent } from './logo/logo.component';

@Component({
  standalone: true,
  imports: [TuiNavigation, SideMenuComponent, LogoComponent],
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrl: 'navigation.component.scss',
})
export class NavigationComponent {}
