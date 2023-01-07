import { Routes } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { SignupComponent } from './signup/signup.component';

export const AuthenticateRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
];
