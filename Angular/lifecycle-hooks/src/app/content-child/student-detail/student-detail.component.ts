import { Component, OnInit, Input, ContentChild, AfterContentInit, ElementRef, AfterContentChecked } from '@angular/core';
import { StudentHistoryComponent } from '../student-history/student-history.component';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, AfterContentInit, AfterContentChecked {
  // @Input() student: any;
  // @ContentChild(StudentHistoryComponent) studentHistory!: StudentHistoryComponent;

  @Input() name1: any;
  @ContentChild(StudentHistoryComponent) yourAccount!: StudentHistoryComponent
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log("Student detail AfterContentInit!", this.yourAccount);
    // this.studentHistory.history.year = 2014;
    // this.studentHistory.history.school = "Ngoc Hoi High School";
    this.yourAccount.account.username = "trongnd1102";
    this.yourAccount.account.password = "2710"
  }

  ngAfterContentChecked(): void {
    console.log("Student detail AfterContentChecked!");
  }

}
