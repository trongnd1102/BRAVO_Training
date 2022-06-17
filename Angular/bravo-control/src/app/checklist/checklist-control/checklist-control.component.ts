import { Component, ElementRef, Inject, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Control } from '@grapecity/wijmo';
import { WjDirectiveBehavior } from '@grapecity/wijmo.angular2.directivebase';
import { FlowDirection } from '../flow-direction';
import { AppearanceStyleEnum } from '../appearance-style';

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
export class ChecklistControlComponent extends Control implements OnInit, ControlValueAccessor {
  @ViewChild('checkList', {static: true}) viewCheckList: any;
  @ViewChild('option', {static: true}) cssOption!: ElementRef;

  private _zText!: string

  public get zText(): string {
    return this._zText;
  }

  public set zText(pzValue: string) {
    this._zText = pzValue;
  }

  private _zValueListSeparator!: string;

  public get zValueListSeparator(): string {
    return this._zValueListSeparator;
  }

  public set zValueListSeparator(pzValue: string) {
    this._zValueListSeparator = pzValue;
  }

  private _bAllowSelectMultiValue!: boolean;

  public get bAllowSelectMultiValue(): boolean {
    return this._bAllowSelectMultiValue;
  }

  public set bAllowSelectMultiValue(pbValue: boolean) {
    this._bAllowSelectMultiValue = pbValue;
  }

  private _checkAppearance: AppearanceStyleEnum = AppearanceStyleEnum.Checkbox;

  public get checkAppearance(): AppearanceStyleEnum {
    return this._checkAppearance;
  }

  public set checkAppearance(pzValue: AppearanceStyleEnum) {
    this._checkAppearance = pzValue;
  }


  private valueList: string[] = [];
  onChange = (changed: any) => {};
  onTouch = () => {};

  private _controls: any;

  public get controls(): wjc.ObservableArray {
    if (!this._controls)
      this._controls = new wjc.ObservableArray();
    return this._controls;
  }

  public set controls(pValue: wjc.ObservableArray) {
    this._controls = pValue;
  }

  private _readOnly!: boolean ;

  public get readOnly(): boolean {
    return this._readOnly;
  }

  public set readOnly(pbValue: boolean) {
    this._readOnly = pbValue;
    this.invalidate();
  }

  private _autoScroll: boolean = true;

  public get autoScroll(): boolean {
    return this._autoScroll;
  }

  public set autoScroll(pbValue: boolean) {
    if (this._autoScroll !== pbValue)
      this._autoScroll = pbValue;
  }

  private _flowDirection: FlowDirection = FlowDirection.LeftToRight;

  // @Enum(FlowDirection)
  public get flowDirection(): FlowDirection {
    return this._flowDirection;
  }

  public set flowDirection(value: FlowDirection) {
    if (this._flowDirection == value)
      return;

    this._flowDirection = value;

    this.invalidate();
  }

  constructor(@Inject(ElementRef) private elRef: ElementRef, @Inject(Injector) injector: Injector) {
    super(WjDirectiveBehavior.getHostElement(elRef, injector));
  }

  writeValue(obj: any): void {
    if(obj)
      this.valueList = obj.split(",")
  }
  registerOnChange(changed: any): void {
    this.onChange = changed
  }
  registerOnTouched(touched: any): void {
    this.onTouch = touched
  }

  ngOnInit(): void {
    this.refresh();
  }

  public addOption(pzName: string, pzText: string, pValue: any) {
    let _option = this.controls.find(item => item.name == pzName);
    if (_option == null) {
      _option = new BravoOptionBox(pzName, pzText, pValue);
      this.controls.push(_option);
    }
  }

  updateCheckBox() {
    for(let i = 0; i < this.controls.length; i++) {
      for(let j = 0; j < this.valueList.length; j++) {
        if(this.controls[i].value == this.valueList[j])
          this.controls[i].checked = true;
      }
    }
    this.viewCheckList.checked = this.controls.every(option => option.checked == true);
  }

  onSelectAll(e: any) {
    for(let i = 0; i < this.controls.length; i++) {
      this.controls[i].checked = e.target.checked;
      if(this.controls[i].checked) {
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
    this.onChange(this.valueList.join(this.zValueListSeparator));
    this.viewCheckList.checked = this.controls.every(option => option.checked == true);
  }

  onSelectOnlyOneOption(e: any) {
    for(let i = 0; i < this.controls.length; i++) {
      if(this.controls[i].value !== e.target.value) {
        this.controls[i].checked = false;
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

  public override refresh(fullUpdate?: boolean) {
    super.refresh(fullUpdate);

    let _css = {'flex-flow': 'row'}

    if (this.flowDirection == FlowDirection.TopDown || this.flowDirection == FlowDirection.BottomUp) {
        _css['flex-flow'] = this.flowDirection == FlowDirection.TopDown ? 'column' : 'column-reverse';
    } else if (this.flowDirection == FlowDirection.RightToLeft) {
        _css['flex-flow'] = 'row-reverse';
    }

    if(this.cssOption) {
      wjc.setCss(this.cssOption.nativeElement, _css);
    }
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
