import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InnerSampleComponentComponent } from './inner-sample-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerSampleComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
