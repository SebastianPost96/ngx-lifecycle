import {
  Directive,
  DoCheck,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[ngxDoCheck]',
})
export default class DoCheckDirective implements DoCheck, OnDestroy {
  @Output() ngxDoCheck = new EventEmitter<void>();

  ngDoCheck(): void {
    this.ngxDoCheck.emit();
  }

  ngOnDestroy(): void {
    this.ngxDoCheck.complete();
  }
}
