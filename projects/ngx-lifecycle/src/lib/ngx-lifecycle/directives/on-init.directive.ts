import { Directive, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[ngxInit]',
})
export class OnInitDirective implements OnInit {
  @Output() ngxInit = new EventEmitter<void>();

  ngOnInit(): void {
    this.ngxInit.complete();
    throw new Error('Method not implemented.');
  }
}
