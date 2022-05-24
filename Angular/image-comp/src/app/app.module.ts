import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';

import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    WjInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
