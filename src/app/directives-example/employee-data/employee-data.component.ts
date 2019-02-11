import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  employeeArray = [
    {id: 101, name: 'Employee 1'},
    {id: 102, name: 'Employee 2'},
    {id: 103, name: 'Employee 3'},
  ]

  employeeId: number;

  getEmployeeData(empId: number){
    this.employeeId = empId;
  }

  constructor() { }

  today: number;

  ngOnInit() {
    this.today = Date.now();
  }

}
