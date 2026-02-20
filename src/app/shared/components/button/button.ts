import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
})
export class ButtonComponent {
  @Input() title = '';
  @Input() isDisabled = false;

  @Output() btnClick: EventEmitter<void> = new EventEmitter<void>();

  onBtnClick(): void {
    this.btnClick.emit();
  }
}
