import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffCreateComponent } from 'app/staff-create/staff-create.component';
import { StaffUpdateComponent } from './staff-update/staff-update.component';



@NgModule({
  declarations: [
    StaffComponent,
    StaffCreateComponent,
    StaffUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StaffModule { }
