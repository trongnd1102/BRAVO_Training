import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { ImageBoxComponent } from './image-box/image-box.component';
import { ApplyFormComponent } from './apply-form/apply-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagePopupComponent,
    ImageBoxComponent,
    ApplyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    WjInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
