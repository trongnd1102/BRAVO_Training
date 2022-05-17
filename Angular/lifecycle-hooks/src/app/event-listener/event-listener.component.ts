import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-listener',
  templateUrl: './event-listener.component.html',
  styleUrls: ['./event-listener.component.css']
})
export class EventListenerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("click",this.func)
  }

  func = this.myFunc.bind(this)
  displayPosition(e: MouseEvent) {
    console.log(e.x, e.y)
  }
  myFunc(e: any){
    this.displayPosition(e)
  }

  ngOnDestroy(): void {
    window.removeEventListener("click",this.func)
  }
}
