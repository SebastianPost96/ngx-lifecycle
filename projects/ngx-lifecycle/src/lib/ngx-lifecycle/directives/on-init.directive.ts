import {
  Directive,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[ngxInit]',
})
export class OnInitDirective implements OnInit, OnDestroy {
  @Output() ngxInit = new EventEmitter<void>();

  ngOnInit(): void {
    this.ngxInit.emit();
  }

  ngOnDestroy(): void {
    this.ngxInit.complete();
  }
}
