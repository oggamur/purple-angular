import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
})
export class ButtonComponent implements AfterViewInit {
  @Input() isDisabled = false;

  @Output() btnClick: EventEmitter<void> = new EventEmitter<void>();

  @ContentChild('buttonContent') btnRef: ElementRef | undefined;

  onBtnClick(): void {
    this.btnClick.emit();
  }

  ngAfterViewInit(): void {
    console.log(this.btnRef);
  }
}
