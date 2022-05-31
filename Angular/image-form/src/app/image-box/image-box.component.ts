import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import * as wijiInput from '@grapecity/wijmo.input'

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: ImageBoxComponent
    }
  ]
})
export class ImageBoxComponent implements OnInit, ControlValueAccessor  {
  @ViewChild('ImagePopup', {static: true}) viewImagePopup!: wijiInput.Popup;
  onChange = () => {};
  onTouched = () => {};
  zImageBoxUrl: any;

  constructor() { }

  writeValue(obj: any): void {
    this.zImageBoxUrl = obj;
  }
  registerOnChange(pChange: any): void {
    this.onChange = pChange;
  }
  registerOnTouched(pTouched: any): void {
    this.onTouched = pTouched;
  }

  ngOnInit(): void {
    this.viewImagePopup.position = 5
  }

  getImageUrl(e: any) {
    this.zImageBoxUrl = e;
    this.onChange = e;
  }

}
