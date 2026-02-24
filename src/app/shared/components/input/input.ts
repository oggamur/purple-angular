import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.html',
  styleUrls: ['./input.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class InputComponent {
  @Input() type: 'text' | 'email' = 'text';
  @Input() isDisabled = false;
  @Input() placeholder: 'Email' | 'Пароль' = 'Email';
  @Input() iconUrl: string | null = null;
  @Input() value: string | null = null;
  @Output() controlValue: EventEmitter<string | null> = new EventEmitter<string | null>();

  onInputChange(value: string | null): void {
    this.controlValue.emit(value);
  }
}
