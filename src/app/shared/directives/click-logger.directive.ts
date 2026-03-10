import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickLogger]',
  standalone: true,
})
export class ClickLoggerDirective {
  @Input() appClickLogger = '';

  @HostListener('click', [])
  onClick(): void {
    console.log(this.appClickLogger);
  }
}
