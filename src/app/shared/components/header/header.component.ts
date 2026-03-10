import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItemInt } from '../../const/menu-items';
import { menuItems } from '../../const/menu-items';
import { NavButtonComponent } from '../nav-button/nav-button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [NavButtonComponent, RouterLink, RouterLinkActive],
})
export class HeaderComponent {
  menuItems: MenuItemInt[] = menuItems;
}
