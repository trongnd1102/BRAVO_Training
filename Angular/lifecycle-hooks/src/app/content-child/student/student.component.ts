import { Component, ContentChild, OnInit, AfterContentInit, AfterViewInit, ViewChild } from '@angular/core';
import { StudentDetailComponent } from './../student-detail/student-detail.component';
import { StudentHistoryComponent } from '../student-history/student-history.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, AfterContentInit, AfterViewInit{
  // @ContentChild(StudentHistoryComponent) studentHistory1!: StudentHistoryComponent;
  @ViewChild(StudentDetailComponent) viewDetail!: StudentDetailComponent;

  // histories = [
  //   {
  //     year: 2006,
  //     school: 'Tu Hiep Primary School'
  //   },
  //   {
  //     year: 2011,
  //     school: 'Tu Hiep Secondary School'
  //   }
  // ];

  // students = [
  //   {
  //     id: 1,
  //     name: 'Trong',
  //     grade: 12,
  //     histories: this.histories
  //   },
  //   {
  //     id: 2,
  //     name: 'Nam',
  //     grade: 11,
  //     histories: this.histories
  //   }
  // ];

  accounts = [
    {
      username: 'trongnd',
      password: '2705'
    }
  ];

  yourName = "Trong";

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log("Student AfterContentInit!");
    // console.log(this.studentHistory1);
    // this.studentHistory1.history.year = 2015;
    // this.studentHistory1.history.school = "Ngoc Hoi High School";
  }

  ngAfterViewInit(): void {
    console.log("Student AfterViewInit!", this.viewDetail);
    // this.viewDetail.student.name = "Khanh";
  }
}
