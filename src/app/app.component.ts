import { Component, signal } from '@angular/core';
import { LayoutComponent } from './public/_layout/layout';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = signal('filmly-angular');
  greatings: string[] = ['Привет', 'Хеллоу', 'Хай', 'Шалом', 'Здорова', 'Салам'];

  isButtonClicked = false;

  onButtonClick() {
    this.isButtonClicked = !this.isButtonClicked;
  }

  onInputChange($event: string | null) {
    console.log($event);
  }
}
