import { Directive, DoCheck, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[ngxDoCheck]',
})
export class DoCheckDirective implements DoCheck {
  /** Emits directly after `ngDoCheck` is called. */
  @Output() ngxDoCheck = new EventEmitter<void>();

  ngDoCheck(): void {
    this.ngxDoCheck.emit();
  }
}
