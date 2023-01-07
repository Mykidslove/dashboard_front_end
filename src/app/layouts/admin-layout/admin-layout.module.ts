import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeModule } from 'app/pages/employee/employee.module';
import { StaffModule } from 'app/staff/staff.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    EmployeeModule,
    NgbModule,
    StaffModule,  
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
 
    
  
  
  ]
})

export class AdminLayoutModule {}
