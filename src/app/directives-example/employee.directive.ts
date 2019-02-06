import { Directive, Input, HostBinding, SimpleChanges } from '@angular/core';
import { EmployeeImages } from './employee-images.enum';

@Directive({
  selector: '[appEmployee]'
})

export class EmployeeDirective {

  // @Input() employeeId: string;
  @Input() employeeIdData: number;
  @HostBinding('src') imageSource;
  
  // @Input() employeeName: string;
  // @HostBinding('value') textBoxValue;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.imageSource = this.getEmployeeData();
  }

  getEmployeeData() {
    if (this.employeeIdData) {
      if (this.employeeIdData == 101) {
        return EmployeeImages.Employee1;
      } else if (this.employeeIdData == 102) {
        return EmployeeImages.Employee2;
      } else if (this.employeeIdData == 103) {
        return EmployeeImages.Employee3;
      } else {
        return EmployeeImages.Other;
      }
    } else {
      return EmployeeImages.Other;
    }
  }

}
