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
  @Input() checkLists: any;
  @Input() zValueListSeparator!: string;
  valueList: string[] = [];
  onChange = (value: any) => {};
  onTouch = () => {}

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

  selectCheckList(pCheckList: any) {
    for(let i = 0; i < pCheckList.options.length; i++) {
      pCheckList.options[i].isSelected = pCheckList.isSelected;
      if(pCheckList.options[i].isSelected) {
        if(this.valueList.indexOf(pCheckList.options[i].id) == -1) {
          this.valueList.push(pCheckList.options[i].id)
        }
      } else {
        this.valueList = []
      }
    }
    this.onChange(this.valueList.join(this.zValueListSeparator))
  }

  selectOption(pCheckList: any) {
    for(let i = 0; i < pCheckList.options.length; i++) {
      if(pCheckList.options[i].isSelected) {
        if(this.valueList.indexOf(pCheckList.options[i].id) == -1) {
          this.valueList.push(pCheckList.options[i].id)
        }
      } else {
        if(this.valueList.indexOf(pCheckList.options[i].id) > -1) {
          this.valueList.splice(this.valueList.indexOf(pCheckList.options[i].id),1)
        }
      }}
    this.onChange(this.valueList.join(this.zValueListSeparator))
    pCheckList.isSelected = pCheckList.options.every((option: any) => {
      return option.isSelected == true;
    })
  }
}
