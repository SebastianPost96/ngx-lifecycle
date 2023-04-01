import {
  AfterContentChecked,
  Directive,
  EventEmitter,
  Output,
} from '@angular/core';

@Directive({
  selector: '[ngxContentChecked]',
})
export class ContentCheckedDirective implements AfterContentChecked {
  /** Emits directly after `ngAfterContentChecked` is called. */
  @Output() ngxContentChecked = new EventEmitter<void>();

  ngAfterContentChecked(): void {
    this.ngxContentChecked.emit();
  }
}
