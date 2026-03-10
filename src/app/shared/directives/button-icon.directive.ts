import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

interface AppButtonIconContext {
  $implicit: string | null;
  active: boolean;
}

@Directive({
  selector: '[appButtonIcon]',
  standalone: true,
})
export class ButtonIconDirective implements OnChanges {
  @Input('appButtonIcon') isActive = true;
  @Input('appButtonIconUrl') url: string | null = null;
  @Input('appButtonIconActiveUrl') activeUrl: string | null = null;

  private viewRef?: EmbeddedViewRef<AppButtonIconContext>;

  constructor(
    private templateRef: TemplateRef<AppButtonIconContext>,
    private viewContainerRef: ViewContainerRef,
  ) {
    this.createOrUpdateView();
  }

  ngOnChanges(): void {
    console.log(this.isActive);
    this.createOrUpdateView();
  }

  private createOrUpdateView() {
    const current: string | null = this.isActive ? this.activeUrl : this.url;

    const context = {
      $implicit: current,
      active: this.isActive,
    }; // сохраним контекст (src картинки + состояние кнопки)

    if (!this.viewRef) {
      // когда viewContentRef не существует
      this.viewContainerRef.clear();
      this.viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef, context);
    } else {
      // когда viewContentRef существует
      this.viewRef.context.$implicit = current;
      this.viewRef.context.active = this.isActive;
      this.viewRef.markForCheck(); // сообщаем что шаблон нужно перерендерить
    }
  }
}
