import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInitDirective } from './directives/on-init.directive';
import { OnDestroyDirective } from './directives/on-destroy.directive';
import { AfterViewInitDirective } from './directives/after-view-init.directive';
import DoCheckDirective from './directives/do-check.directive';

@NgModule({
  declarations: [
    OnInitDirective,
    OnDestroyDirective,
    AfterViewInitDirective,
    DoCheckDirective,
  ],
  imports: [CommonModule],
  exports: [
    OnInitDirective,
    OnDestroyDirective,
    AfterViewInitDirective,
    DoCheckDirective,
  ],
})
export class NgxLifecycleModule {}
