import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBase } from '@grapecity/wijmo';

import * as wjc from '@grapecity/wijmo';

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
export class ChecklistControlComponent extends ControlBase implements OnInit, ControlValueAccessor {
  @ViewChild('checkList', {static: true}) viewCheckList: any;
  @Input() zCheckListType!: string;
  @Input() zValueListSeparator!: string;
  @Input() bAllowSelectMultiValue!: boolean;

  private _controls: any;

  valueList: string[] = [];
  onChange = (value: any) => {};
  onTouch = () => {};

  public get controls(): wjc.ObservableArray {
    if (!this._controls)
      this._controls = new wjc.ObservableArray();
    return this._controls;
  }

  public set controls(value: wjc.ObservableArray) {
    this._controls = value;
  }

  constructor() {
    super()
  }

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

  public addOption(pzName: string, pzText: string, pValue: any) {
    let _option = this.controls.find(item => item.name == pzName);
    if (_option == null) {
      _option = new BravoOptionBox(pzName, pzText, pValue);
      this.controls.push(_option);
    }
  }

  onSelectAll(e: any) {
    for(let i = 0; i < this.controls.length; i++) {
      this.controls[i].isSelected = e.target.checked;
      if(this.controls[i].isSelected) {
        if(this.valueList.indexOf(this.controls[i].value) === -1) {
          this.valueList.push(this.controls[i].value)
        }
      } else {
        this.valueList = []
      }
    }
    this.onChange(this.valueList.join(this.zValueListSeparator))
  }

  onSelectOption(e: any) {
    if(e.target.checked) {
      if(this.valueList.indexOf(e.target.value) === -1) {
        this.valueList.push(e.target.value)
      }
    } else {
      if(this.valueList.indexOf(e.target.value) !== -1) {
        this.valueList.splice(this.valueList.indexOf(e.target.value),1)
      }
    }
    this.onChange(this.valueList.join(this.zValueListSeparator))
    this.viewCheckList.checked = this.controls.every((option: any) => {
      return option.isSelected == true;
    })
  }

  onSelectOnlyOneOption(e: any) {
    for(let i = 0; i < this.controls.length; i++) {
      if(this.controls[i].value !== e.target.value) {
        this.controls[i].isSelected = false;
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

export class BravoOptionBox {
  public readonly name: string;
  public text: string;

  private _value: any;

  public get value(): any {
    return this._value;
  }

  public set value(val: any) {
    // let _bIsNumber = Number.isNumber(val);

    // if (_bIsNumber)
    //   this._value = Number.asNumber(val);
    // else
      this._value = val;
  }

  constructor(name: string, text: string, value: any) {
    this.name = name;
    this.text = text;
    this.value = value;
  }
}
