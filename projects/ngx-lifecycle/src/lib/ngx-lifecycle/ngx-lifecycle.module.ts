import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInitDirective } from './directives/on-init.directive';
import { OnDestroyDirective } from './directives/on-destroy.directive';
import { AfterViewInitDirective } from './directives/after-view-init.directive';

@NgModule({
  declarations: [OnInitDirective, OnDestroyDirective, AfterViewInitDirective],
  imports: [CommonModule],
  exports: [OnInitDirective, OnDestroyDirective, AfterViewInitDirective],
})
export class NgxLifecycleModule {}
