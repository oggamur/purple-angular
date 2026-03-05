import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { InputComponent } from '../../shared/components/input/input.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  imports: [ButtonComponent, InputComponent],
})
export class LayoutComponent {
  onInputChange($event: string | null) {
    console.log($event);
  }
}
