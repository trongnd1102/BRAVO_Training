import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputsComponent,
    },
  ]
})
export class InputsComponent implements OnInit, ControlValueAccessor {
  @Input() style = "none";
  @Input() multiLine = false;
  typing: any;
  onChange = (value: any) => {};
  onTouched = () => {};

  /**
   * đặt tên biến với tiền tố viết tắt (vd: boolean -> b, number -> n, string -> z)
   * đặt tên tham số truyền vào với tiền tố viết tắt p (vd: boolean -> pb)
   * đặt tên biến private với tiền tố _
   */

  constructor() { }

  writeValue(obj: any): void {
    this.typing = obj;
  }

  registerOnChange(change: any): void {
    this.onChange = change;
  }

  registerOnTouched(touch: any): void {
    this.onTouched = touch;
  }

  ngOnInit(): void {
  }

  onBlur() {
    this.onTouched();
  }

  changes($event: any) {
    switch(this.style) {
      case "none":
        this.onChange($event.target.value);
        break;
      case "capitalize":
        this.onChange(this.changeCapitalize($event.target.value));
        break;
      case "uppercase":
        this.onChange($event.target.value.toUpperCase());
        break;
    }
    // this.onChange($event.target.value);
  }

  changeCapitalize(str: string) {
    return str.toLowerCase().replace(/(^|\s)\S/g, function(letter) {
      return letter.toUpperCase();
    });
  }
}
