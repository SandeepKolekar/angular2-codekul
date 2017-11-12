
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FormsComponent } from './forms/forms.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';

const dashRoutes: Routes = [
    { path: 'dataTable', component: DataTableComponent },
    { path: 'formsDemo', component: FormsComponent },
    { path: 'httpDemo', component: HttpDemoComponent }
];

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'fotgotpassword', component: ForgotPasswordComponent },
    { path: 'dashboard', component: DashboardComponent , children: dashRoutes },
    { path: 'register', redirectTo: 'signup' },
    { path: '**', redirectTo: 'login' }
];

export const AppRouting = RouterModule.forRoot( routes );
