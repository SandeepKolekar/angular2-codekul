import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRouting } from './app.router';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GlobalService } from './global/global.service';
import { CurrencyFormatDirective } from './currency-format.directive';
@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    DataTableComponent,
    HeaderComponent,
    FooterComponent,
    CurrencyFormatDirective
  ],
  imports: [NgbModule,
    BrowserModule,
    AppRouting
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
