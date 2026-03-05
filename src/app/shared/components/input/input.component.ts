import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class InputComponent {
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() isDisabled = false;
  @Input() placeholder: 'Email' | 'Пароль' = 'Email';
  @Input() iconUrl: string | null = null;
  @Input() value: string | null = null;
  @Output() controlValue: EventEmitter<string | null> = new EventEmitter<string | null>();

  isPasswordVisible = false;

  onEyeClick(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.type = this.type === 'password' ? 'text' : 'password';
  }

  onInputChange(value: string | null): void {
    this.controlValue.emit(value);
  }
}
