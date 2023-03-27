import {
  AfterViewInit,
  Directive,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[ngxViewInit]',
})
export class AfterViewInitDirective implements AfterViewInit, OnDestroy {
  @Output() ngxViewInit = new EventEmitter<void>();

  ngAfterViewInit(): void {
    this.ngxViewInit.emit();
  }

  ngOnDestroy(): void {
    this.ngxViewInit.complete();
  }
}
