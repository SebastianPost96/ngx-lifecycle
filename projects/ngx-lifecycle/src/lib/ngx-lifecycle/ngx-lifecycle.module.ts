import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInitDirective } from './directives/on-init.directive';
import { OnDestroyDirective } from './directives/on-destroy.directive';
import { AfterViewInitDirective } from './directives/after-view-init.directive';
import DoCheckDirective from './directives/do-check.directive';
import { ContentInitDirective } from './directives/content-init.directive';
import { ContentCheckedDirective } from './directives/content-checked.directive';
import { ViewCheckedDirective } from './directives/view-checked.directive';

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
