import { ChildComponent } from './../child/child.component';
import { AfterContentInit, AfterViewInit, Component, ContentChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterContentInit{
  isChild = true;
  name!: string;
  @ContentChild(ChildComponent, {static: true}) color!: ChildComponent;

  constructor() {
    console.log("Parent constructor is called!");
  }

  ngOnInit(): void {
    // this.name = 'red';
    console.log("Parent OnInit is called!");
  }

  ngAfterContentInit(): void {
    console.log("Parent AfterContentInit is called!", this.color);
    // this.color.name = "red";
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }
}
