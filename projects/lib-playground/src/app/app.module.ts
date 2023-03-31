import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLifecycleModule } from 'projects/ngx-lifecycle/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxLifecycleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
