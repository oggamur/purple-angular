import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { LeftPanelComponent } from '../../shared/components/left-panel/left-panel.component';

@Component({
  selector: 'app-private-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LeftPanelComponent],
})
export class PrivateLayoutComponent {}
