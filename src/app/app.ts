import { Component, signal } from '@angular/core';
import { InputComponent } from './shared/components/input/input';
@Component({
  selector: 'app-root',
  imports: [InputComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
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
