import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  @ViewChild('myInput') inputElement!: ElementRef | null;

  onBtnClick() {
    console.log(this.inputElement);
  }

  protected readonly title = signal('filmly-angular');
}
