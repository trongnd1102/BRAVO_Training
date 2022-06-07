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
  checkListValue: any = [];
  arr: any = [];
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
      if(pCheckList.options[i].isSelected){
        if(this.checkListValue.indexOf(pCheckList.options[i].id) == -1) {
          this.checkListValue += pCheckList.options[i].id + ","
          // this.checkListValue.push(pCheckList.options[i].id)
        }
      } else {
        this.checkListValue = ""
        // this.checkListValue = []
      }
    }
    this.onChange(this.checkListValue)
    // this.onChange(this.checkListValue.toString())
  }

  selectOption(pCheckList: any) {
    for(let i = 0; i < pCheckList.options.length; i++) {
      if(pCheckList.options[i].isSelected){
        if(this.checkListValue.indexOf(pCheckList.options[i].id) == -1) {
          this.checkListValue += pCheckList.options[i].id + ","
          // this.checkListValue.push(pCheckList.options[i].id)
        }
      } else {
        this.checkListValue = this.checkListValue.replace(pCheckList.options[i].id + ",", "")
        this.checkListValue = this.checkListValue.trim();
        // this.checkListValue = this.checkListValue.splice(this.checkListValue.indexOf(pCheckList.options[i].id),1)
      }
    }
    this.onChange(this.checkListValue)
    // this.onChange(this.checkListValue.toString())
    pCheckList.isSelected = pCheckList.options.every((option: any) => {
      return option.isSelected == true;
    })
  }
}
