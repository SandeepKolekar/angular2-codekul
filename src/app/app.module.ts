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
import { FormsComponent } from './forms/forms.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { AuthTokenGuard } from './auth-token.guard';
import { UnauthorizedSourceComponent } from './unauthorized-source/unauthorized-source.component';
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
    CurrencyFormatDirective,
    FormsComponent,
    HttpDemoComponent,
    UnauthorizedSourceComponent
  ],
  imports: [NgbModule,
    BrowserModule,
    AppRouting
  ],
  providers: [GlobalService, AuthTokenGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
