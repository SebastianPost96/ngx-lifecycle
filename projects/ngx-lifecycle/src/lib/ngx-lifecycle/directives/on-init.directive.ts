import { Directive, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[ngxInit]',
})
export class OnInitDirective implements OnInit {
  /** Emits directly after `ngOnInit` is called. */
  @Output() ngxInit = new EventEmitter<void>();

  ngOnInit(): void {
    this.ngxInit.emit();
  }
}
