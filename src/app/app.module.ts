import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ComponentDataTableComponent } from './component-data-table.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentDataTableComponent
  ],
  imports: [NgbModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
