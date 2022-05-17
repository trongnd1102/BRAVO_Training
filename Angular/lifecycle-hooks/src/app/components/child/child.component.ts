import { ParentComponent } from './../parent/parent.component';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
        Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit,
        SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck,
                            AfterContentInit, AfterContentChecked,
                            AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() name = "";
  @ContentChild('childContent') childContent!: ElementRef;
  @ViewChild('childView') childView!: ElementRef;

  constructor() {
    console.log("Child constructor is called!");
  }

  /**
   * Be called once before OnInit()
   * Be called whenever the data-bound input properties changes
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child OnChanges is called!", changes);
  }

  /**
   * Be called when the component has initialized
   * Be called only once after the first ngOnChanges
   * Use to do initializations
   */
  ngOnInit() {
    console.log("Child OnInit is called!");
  }

  /**
   * Be called after ngOnInit() in the first run
   * Be called after ngOnChanges() on every change detector run
   */
  ngDoCheck(): void {
    console.log("Child DoCheck is called!");
  }

  /**
   * Be called once after the first ngDoCheck()
   */
  ngAfterContentInit(): void {
    console.log("Child AfterContentInit is called!", this.childContent);
  }

  /**
   * Be called after ngAfterContentInit()
   * Be called after every ngDoCheck()
   */
  ngAfterContentChecked(): void {
    console.log("Child AfterContentChecked is called!");
    this.childContent.nativeElement.setAttribute("style", `color:${this.name}`);
  }

  /**
   * Be called once after the first ngAfterContentChecked()
   */
  ngAfterViewInit(): void {
    console.log("Child AfterViewInit is called!", this.childView);
  }

  /**
   * Be called once after ngAfterViewInit()
   * Be called after every ngAfterContentChecked()
   */
  ngAfterViewChecked(): void {
    console.log("Child AfterViewChecked is called!");
    this.childView.nativeElement.setAttribute("style", `color:${this.name}`);
  }

  /**
   * Be calles once just before the component is removed from the DOM
   */
  ngOnDestroy() {
    console.log("Child OnDestroy is called!");
  }

//   onSave(event: MouseEvent) {

//   }
}

