import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  @Input() url: any;
  @Output() imageOutput = new EventEmitter<string>();
  // url: any;

  constructor() { }

  ngOnInit(): void {
  }

  selectImage(e: any) {
    if(e.target.files) {
      var readFile = new FileReader();
      readFile.readAsDataURL(e.target.files[0]);
      readFile.onload = (f: any) => {
        this.url = f.target.result;
        this.imageOutput.emit(this.url);
      }
    }
  }

  deleteImage() {
    document.getElementById('image-upload')?.onreset;
    this.url = "";
    this.imageOutput.emit(this.url);
  }

}
