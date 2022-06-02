import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  zImageBoxUrl: any;
  onChange = (url: any) => {};
  onTouched = () => {};

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
  }

  getImageUrl(e: any) {
    this.zImageBoxUrl = e;
    this.onChange(this.zImageBoxUrl);
  }

}
