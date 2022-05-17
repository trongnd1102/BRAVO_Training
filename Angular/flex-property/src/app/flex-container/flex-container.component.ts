import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flex-container',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.css']
})
export class FlexContainerComponent implements OnInit {
  @ViewChild('flex', {static: true}) htmlFlex!: ElementRef;
  @ViewChild('justifyContent', {static: true}) justifyC!: ElementRef;
  @ViewChild('alignContent', {static: true}) alignC!: ElementRef;

  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      FlexDirection: [''],
      FlexWrap: [''],
      FlexFlow: [''],
      JustifyContent: [''],
      AlignItems: [''],
      AlignContent:['']
    });
  }

  ngOnInit(): void {
  }

  changeFlexDirection() {
    let zFlexDirection = this.form.get('FlexDirection')?.value;
    switch(zFlexDirection) {
      case 'Column':
        this.htmlFlex.nativeElement.setAttribute("style", "flex-direction: column");
        break;
      case 'Column Reverse':
        this.htmlFlex.nativeElement.setAttribute("style", "flex-direction: column-reverse");
        break;
      case 'Row':
        this.htmlFlex.nativeElement.setAttribute("style", "flex-direction: row");
        break;
      case 'Row Reverse':
        this.htmlFlex.nativeElement.setAttribute("style", "flex-direction: row-reverse");
        break;
    }
  }

  changeFlexWrap() {
    let zFlexWrap = this.form.get('FlexWrap')?.value;
    switch(zFlexWrap) {
      case 'Wrap':
        this.htmlFlex.nativeElement.setAttribute("style", "flex-wrap: wrap");
        break;
      case 'No Wrap':
        this.htmlFlex.nativeElement.setAttribute("style", "flex-wrap: nowrap");
        break;
      case 'Wrap Reverse':
        this.htmlFlex.nativeElement.setAttribute("style", "flex-wrap: wrap-reverse");
        break;
    }
  }

  changeFlexFlow() {
    let zFlexFlow = this.form.get('FlexFlow')?.value;
    switch(zFlexFlow) {
      case 'Column Wrap':
        this.htmlFlex.nativeElement.setAttribute("style", "flex-flow: column wrap");
        break;
      case 'Row Wrap':
        this.htmlFlex.nativeElement.setAttribute("style", "flex-flow: row wrap");
        break;
      case 'Column Wrap Reverse':
        this.htmlFlex.nativeElement.setAttribute("style", "flex-flow: column wrap-reverse");
        break;
      case 'Row Wrap Reverse':
        this.htmlFlex.nativeElement.setAttribute("style", "flex-flow: row wrap-reverse");
        break;
    }
  }

  changeJustifyContent() {
    let zJustifyContent = this.form.get('JustifyContent')?.value;
    switch(zJustifyContent) {
      case 'Center':
        this.justifyC.nativeElement.setAttribute("style", "justify-content: center");
        break;
      case 'Flex Start':
        this.justifyC.nativeElement.setAttribute("style", "justify-content: flex-start");
        break;
      case 'Flex End':
        this.justifyC.nativeElement.setAttribute("style", "justify-content: flex-end");
        break;
      case 'Space Around':
        this.justifyC.nativeElement.setAttribute("style", "justify-content: space-around");
        break;
      case 'Space Between':
        this.justifyC.nativeElement.setAttribute("style", "justify-content: space-between");
        break;
    }
  }

  changeAlignItems() {
    let zAlignItems = this.form.get('AlignItems')?.value;
    switch(zAlignItems) {
      case 'Center':
        this.htmlFlex.nativeElement.setAttribute("style", "align-items: center");
        break;
      case 'Flex Start':
        this.htmlFlex.nativeElement.setAttribute("style", "align-items: flex-start");
        break;
      case 'Flex End':
        this.htmlFlex.nativeElement.setAttribute("style", "align-items: flex-end");
        break;
      case 'Stretch':
        this.htmlFlex.nativeElement.setAttribute("style", "align-items: stretch");
        break;
      case 'Baseline':
        this.htmlFlex.nativeElement.setAttribute("style", "align-items: baseline");
        break;
    }
  }

  changeAlignContent() {
    let zAlignContent = this.form.get('AlignContent')?.value;
    switch(zAlignContent) {
      case 'Center':
        this.alignC.nativeElement.setAttribute("style", "align-content: center");
        break;
      case 'Flex Start':
        this.alignC.nativeElement.setAttribute("style", "align-content: flex-start");
        break;
      case 'Flex End':
        this.alignC.nativeElement.setAttribute("style", "align-content: flex-end");
        break;
      case 'Stretch':
        this.alignC.nativeElement.setAttribute("style", "align-content: stretch");
        break;
      case 'Space Around':
        this.alignC.nativeElement.setAttribute("style", "align-content: space-around");
        break;
      case 'Space Between':
        this.alignC.nativeElement.setAttribute("style", "align-content: space-between");
        break;
    }
  }
}
