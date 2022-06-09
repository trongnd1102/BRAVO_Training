import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checklist-control',
  templateUrl: './checklist-control.component.html',
  styleUrls: ['./checklist-control.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ChecklistControlComponent,
    multi: true
  }]
})
export class ChecklistControlComponent implements OnInit, ControlValueAccessor {
  @Input() zCheckListType!: string;
  @Input() checkLists: any;
  @Input() zValueListSeparator!: string;
  @Input() bAllowSelectMultiValue!: boolean;
  valueList: string[] = [];
  onChange = (value: any) => {};
  onTouch = () => {};

  constructor() { }

  writeValue(obj: any): void {
  }
  registerOnChange(changed: any): void {
    this.onChange = changed
  }
  registerOnTouched(touched: any): void {
    this.onTouch = touched
  }

  ngOnInit(): void {
  }

  onSelectAll(e: any) {
    for(let i = 0; i < this.checkLists.length; i++) {
      this.checkLists[i].isSelected = e.target.checked;
      if(this.checkLists[i].isSelected) {
        if(this.valueList.indexOf(this.checkLists[i].id) == -1) {
          this.valueList.push(this.checkLists[i].id)
        }
      } else {
        this.valueList = []
      }
    }
    this.onChange(this.valueList.join(this.zValueListSeparator))
  }

  onSelectOption(e: any) {
    if(e.target.checked) {
      if(this.valueList.indexOf(e.target.value) == -1) {
        this.valueList.push(e.target.value)
      }
    } else {
      if(this.valueList.indexOf(e.target.value) > -1) {
        this.valueList.splice(this.valueList.indexOf(e.target.value),1)
      }
    }
    this.onChange(this.valueList.join(this.zValueListSeparator))
    this.checkLists.isSelected = this.checkLists.every((option: any) => {
      return option.isSelected == true;
    })
  }

  onSelectedOnlyOneOption(e: any) {
    for(let i = 0; i < this.checkLists.length; i++) {
      if(this.checkLists[i].id !== e.target.value) {
        this.checkLists[i].isSelected = false;
      }
      if(e.target.checked) {
        this.valueList = [];
        this.valueList.push(e.target.value)
      } else {
        this.valueList = [];
      }
    }
    this.onChange(this.valueList.toString())
  }
}
