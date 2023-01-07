import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AuthenticateRoutes } from './authenticate.routing';
import { AuthenticateComponent } from './authenticate.component';
import { AdminLayoutComponent } from 'app/layouts/admin-layout/admin-layout.component';




@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthenticateComponent,
 
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AuthenticateRoutes),
  
    
  ]
})
export class AuthenticateModule { }
