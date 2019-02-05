import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EmployeeDirective } from './employee.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EmployeeDataComponent, EmployeeDirective],
  exports: [EmployeeDataComponent, EmployeeDirective],
})
export class DirectivesExampleModule { }
