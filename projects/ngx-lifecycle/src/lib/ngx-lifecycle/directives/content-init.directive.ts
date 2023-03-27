import {
  AfterContentInit,
  Directive,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[ngxContentInit]',
})
export class ContentInitDirective implements AfterContentInit, OnDestroy {
  @Output() ngxContentInit = new EventEmitter<void>();

  ngAfterContentInit(): void {
    this.ngxContentInit.emit();
  }

  ngOnDestroy(): void {
    this.ngxContentInit.complete();
  }
}
