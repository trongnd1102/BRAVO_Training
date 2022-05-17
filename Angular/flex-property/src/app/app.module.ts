import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlexContainerComponent } from './flex-container/flex-container.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexItemsComponent } from './flex-items/flex-items.component';
import { FlexResponsiveComponent } from './flex-responsive/flex-responsive.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexContainerComponent,
    FlexItemsComponent,
    FlexResponsiveComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
