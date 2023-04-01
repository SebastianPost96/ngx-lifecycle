import { AfterViewInit, Directive, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[ngxViewInit]',
})
export class AfterViewInitDirective implements AfterViewInit {
  /** Emits directly after `ngAfterViewInit` is called. */
  @Output() ngxViewInit = new EventEmitter<void>();

  ngAfterViewInit(): void {
    this.ngxViewInit.emit();
  }
}
