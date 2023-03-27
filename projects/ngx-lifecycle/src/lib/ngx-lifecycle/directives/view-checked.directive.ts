import {
  AfterViewChecked,
  Directive,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[ngxViewChecked]',
})
export class ViewCheckedDirective implements AfterViewChecked, OnDestroy {
  @Output() ngxViewChecked = new EventEmitter<void>();

  ngAfterViewChecked(): void {
    this.ngxViewChecked.emit();
  }

  ngOnDestroy(): void {
    this.ngxViewChecked.complete();
  }
}
