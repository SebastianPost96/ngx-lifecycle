import {
  AfterContentInit,
  Directive,
  EventEmitter,
  Output,
} from '@angular/core';

@Directive({
  selector: '[ngxContentInit]',
})
export class ContentInitDirective implements AfterContentInit {
  /** Emits directly after `ngAfterContentInit` is called. */
  @Output() ngxContentInit = new EventEmitter<void>();

  ngAfterContentInit(): void {
    this.ngxContentInit.emit();
  }
}
