import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiNavigation } from '@taiga-ui/layout';
import { LogoComponent } from '../../core/logo/logo.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [LogoComponent, TuiNavigation, SideMenuComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {}
