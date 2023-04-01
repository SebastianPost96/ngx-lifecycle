import {
  AfterViewChecked,
  Directive,
  EventEmitter,
  Output,
} from '@angular/core';

@Directive({
  selector: '[ngxViewChecked]',
})
export class ViewCheckedDirective implements AfterViewChecked {
  /** Emits directly after `ngAfterViewChecked` is called. */
  @Output() ngxViewChecked = new EventEmitter<void>();

  ngAfterViewChecked(): void {
    this.ngxViewChecked.emit();
  }
}
