import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ComponentDataTableComponent } from './component-data-table.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppRouting } from './app.router';
@NgModule({
  declarations: [
    AppComponent,
    ComponentDataTableComponent,
    ForgotPasswordComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [NgbModule,
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
