
import { RouterModule, Routes } from '@angular/router';
import { ComponentDataTableComponent } from './component-data-table.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'fotgotpassword', component: ForgotPasswordComponent },
    { path: 'dataTable', component: ComponentDataTableComponent },
    { path: 'register', redirectTo: 'signup' },
    { path: '**', redirectTo: 'login' }
];

export const AppRouting = RouterModule.forRoot( routes );
