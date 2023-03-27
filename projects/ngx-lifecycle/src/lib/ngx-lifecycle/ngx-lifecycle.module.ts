import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AfterViewInitDirective,
  ContentCheckedDirective,
  ContentInitDirective,
  DoCheckDirective,
  OnDestroyDirective,
  OnInitDirective,
  ViewCheckedDirective,
} from './directives';

@NgModule({
  declarations: [
    OnInitDirective,
    OnDestroyDirective,
    AfterViewInitDirective,
    DoCheckDirective,
    ContentInitDirective,
    ContentCheckedDirective,
    ViewCheckedDirective,
  ],
  imports: [CommonModule],
  exports: [
    OnInitDirective,
    OnDestroyDirective,
    AfterViewInitDirective,
    DoCheckDirective,
    ContentInitDirective,
    ContentCheckedDirective,
    ViewCheckedDirective,
  ],
})
export class NgxLifecycleModule {}
