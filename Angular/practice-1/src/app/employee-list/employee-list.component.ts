import { Employee } from './../employee.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { EmployeeService } from './../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  backUpData: Employee[] = [];

  constructor(
    // private httpClient: HttpClient,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    // this.httpClient.get("assets/employee2.json").subscribe((data) => {
    //   this.employees = data;
    //   console.log(this.employees);
    // })
    this.getDataFromService();
  }

  getDataFromService(): void {
    this.employeeService.getJSON().subscribe((data) => {
      this.employees = data;
      console.log("employees", this.employees);
      this.backUpData = JSON.parse(JSON.stringify(this.employees));
      console.log("backUpData", this.backUpData);
    });
  }

  sortFunc(col: string, state: number, a: any, b: any): number {
    if (state == 0){
      return a[col] < b[col] ? -1 : 1;
    } else if (state == 1) {
      return a[col] < b[col] ? 1 : -1;
    } else {  // why must have "else" statement ?
      return 0;
    }
  }

  sortState = new Map();

  sortData(column: string): void {
    /**
     * Method 9 => upgrade: Use object Map()
     */
    if(this.sortState.get(column) == null){
      this.sortState.set(column, 0);
    }
    if(this.sortState.get(column) == 2) {
      this.employees = this.backUpData.slice();
      this.sortState.set(column,0);
    } else {
      this.employees.sort(this.sortFunc.bind(this, column, this.sortState.get(column)));
      this.sortState.set(column, this.sortState.get(column) + 1);
    }
    console.log("sortState has " + this.sortState.size + " element.")
    console.log(column + " state: " + this.sortState.get(column));
    console.log("employees", this.employees);
  }
}


