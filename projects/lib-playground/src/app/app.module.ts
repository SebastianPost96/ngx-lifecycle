import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLifecycleModule } from 'projects/ngx-lifecycle/src/public-api';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { CompatibilityDirective } from './directives/compatibility.directive';

@NgModule({
  declarations: [AppComponent, TestComponent, CompatibilityDirective],
  imports: [BrowserModule, NgxLifecycleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
