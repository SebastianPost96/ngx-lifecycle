import { Directive, EventEmitter, OnDestroy, Output } from '@angular/core';

@Directive({
  selector: '[ngxDestroy]',
})
export class OnDestroyDirective implements OnDestroy {
  /** Emits directly after `ngOnDestroy` is called. */
  @Output() ngxDestroy = new EventEmitter<void>();

  ngOnDestroy(): void {
    this.ngxDestroy.next();
  }
}
