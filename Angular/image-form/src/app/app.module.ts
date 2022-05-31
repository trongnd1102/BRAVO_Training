import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { ImageBoxComponent } from './image-box/image-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagePopupComponent,
    ImageBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WjInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
