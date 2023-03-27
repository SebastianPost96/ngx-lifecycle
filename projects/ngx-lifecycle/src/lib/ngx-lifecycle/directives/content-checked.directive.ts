import {
  AfterContentChecked,
  Directive,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[ngxContentChecked]',
})
export class ContentCheckedDirective implements OnDestroy, AfterContentChecked {
  @Output() ngxContentChecked = new EventEmitter<void>();

  ngAfterContentChecked(): void {
    this.ngxContentChecked.emit();
  }

  ngOnDestroy(): void {
    this.ngxContentChecked.complete();
  }
}
