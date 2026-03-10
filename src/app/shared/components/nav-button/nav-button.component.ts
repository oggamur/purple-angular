import { AfterViewInit, Component, ElementRef, inject, Input, OnDestroy } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { ButtonIconDirective } from '../../directives/button-icon.directive';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
  standalone: true,
  imports: [NgClass, ButtonIconDirective, NgOptimizedImage],
})
export class NavButtonComponent implements AfterViewInit, OnDestroy {
  private _elementRef: ElementRef = inject(ElementRef);
  private _observer!: MutationObserver;

  isActive = false;
  @Input() text = '';
  @Input() iconUrlActive = '';
  @Input() iconUrlInActive = '';
  @Input() link = '';

  ngAfterViewInit(): void {
    this._observer = new MutationObserver(() => {
      this.isActive = this._elementRef.nativeElement.classList.contains('active');
    });

    this._observer.observe(this._elementRef.nativeElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  ngOnDestroy() {
    this._observer.disconnect();
  }
}
