import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flex-items',
  templateUrl: './flex-items.component.html',
  styleUrls: ['./flex-items.component.css']
})
export class FlexItemsComponent implements OnInit {
  @ViewChild('item', {static: true}) htmlItem!: ElementRef
  @ViewChild('shrink', {static: true}) htmlShrink!: ElementRef
  @ViewChild('align', {static: true}) htmlAlign!: ElementRef

  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      Align: [''],
    });
  }

  ngOnInit(): void {
  }

  nOrder!: number;
  changeOrder() {
    this.htmlItem.nativeElement.setAttribute("style", `order: ${this.nOrder}`);
  }

  nGrow!: number;
  changeFlexGrow() {
    this.htmlItem.nativeElement.setAttribute("style", `flex-grow: ${this.nGrow}`);
  }

  nShrink!: number;
  changeFlexShrink() {
    this.htmlShrink.nativeElement.setAttribute("style", `flex-shrink: ${this.nShrink}`);
  }

  nBasis!: number;
  changeFlexBasis() {
    this.htmlItem.nativeElement.setAttribute("style", `flex-basis: ${this.nBasis}px`);
  }

  changeAlignSelf() {
    let zAlignSelf = this.form.get('Align')?.value;
    switch(zAlignSelf) {
      case 'Center':
        this.htmlAlign.nativeElement.setAttribute("style", "align-self: center");
        break;
      case 'Flex Start':
        this.htmlAlign.nativeElement.setAttribute("style", "align-self: flex-start");
        break;
      case 'Flex End':
        this.htmlAlign.nativeElement.setAttribute("style", "align-self: flex-end");
        break;
      case 'Stretch':
        this.htmlAlign.nativeElement.setAttribute("style", "align-self: stretch");
        break;
    }
  }
}
