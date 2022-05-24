import { Component, OnInit, ViewChild } from '@angular/core';
import * as wijiInput from '@grapecity/wijmo.input'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @ViewChild('ImagePopup', {static: true}) imagePopup!: wijiInput.Popup;

  constructor() { }

  ngOnInit(): void {
    this.imagePopup.position = 6
  }

}
