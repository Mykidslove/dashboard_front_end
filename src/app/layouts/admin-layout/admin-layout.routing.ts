import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { EmployeeListComponent } from 'app/pages/employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from 'app/pages/employee/employee-create/employee-create.component';
import { StaffComponent } from 'app/staff/staff.component';
import { StaffCreateComponent } from 'app/staff-create/staff-create.component';
import { StaffUpdateComponent } from 'app/staff/staff-update/staff-update.component';
import { EmployeeUpdateComponent } from 'app/pages/employee/employee-update/employee-update.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'employee',           component: EmployeeListComponent },
    { path: 'employee-create',           component: EmployeeCreateComponent },
    { path: 'employee/:id',           component: EmployeeUpdateComponent },
    { path: 'staff',           component:StaffComponent },
    { path: 'staff/:id',           component:StaffUpdateComponent },
    { path: 'staff-create',           component:StaffCreateComponent },
    
];
