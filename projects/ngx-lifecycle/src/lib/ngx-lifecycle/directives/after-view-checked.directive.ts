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
  @Output() ngxViewChecked = new EventEmitter<void>();

  ngAfterViewChecked(): void {
    this.ngxViewChecked.emit();
  }
}
