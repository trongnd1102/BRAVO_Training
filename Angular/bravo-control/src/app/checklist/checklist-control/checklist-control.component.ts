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
  onChange = (value: any) => {};
  onTouch = () => {}

  constructor() { }

  writeValue(obj: any): void { }
  registerOnChange(changed: any): void {
    this.onChange = changed
  }
  registerOnTouched(touched: any): void {
    this.onTouch = touched
  }

  ngOnInit(): void { }

  selectCheckList(pCheckList: any) {
    for(let i = 0; i < pCheckList.options.length; i++) {
      pCheckList.options[i].isSelected = pCheckList.isSelected;
    }
    this.onChange(pCheckList.isSelected)
  }

  autoSelectCheckList(pCheckList: any, pOption: any) {
    pCheckList.isSelected = pOption.every((option: any) => {
      return option.isSelected == true;
    })
    this.onChange(pCheckList.isSelected)
  }
}
