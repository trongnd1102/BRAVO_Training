import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.css']
})
export class ImagePopupComponent implements OnInit {
  @Output() imageOutput = new EventEmitter<string>();
  @Input() zImagePopupUrl: any

  constructor() { }

  ngOnInit(): void {
  }

  selectImage(e: any) {
    if(e.target.files) {
      var readFile = new FileReader();
      readFile.readAsDataURL(e.target.files[0]);
      readFile.onload = (f: any) => {
        this.zImagePopupUrl = f.target.result;
        this.imageOutput.emit(this.zImagePopupUrl);
      }
    }
  }

  deleteImage() {
    document.getElementById('image-upload')?.onreset;
    this.zImagePopupUrl = "";
    this.imageOutput.emit(this.zImagePopupUrl);
  }
}
