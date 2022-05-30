import { Component, OnInit, ViewChild } from '@angular/core';
import * as wijiInput from '@grapecity/wijmo.input'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit  {
  @ViewChild('ImagePopup', {static: true}) imagePopup!: wijiInput.Popup;
  url!: string;
  urlCopy: any;

  constructor() { }

  ngOnInit(): void {
    this.imagePopup.position = 5
  }

  getImageUrl(e: any) {
    this.url = e;
    this.urlCopy = e;
  }

  convertBase64ToUint8Array(pUrl: any) {
    var BASE64_MARKER = ';base64,';
    var base64Index = pUrl.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var base64 = pUrl.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for(let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    this.urlCopy = "data:image/jpeg;uint8array," + array
  }

  converUint8ArrayToBase64() {
    this.urlCopy = this.url;
  }
}
