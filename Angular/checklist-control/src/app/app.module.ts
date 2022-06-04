import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RatingControlComponent } from './rating-control/rating-control.component';
import { TradingControlComponent } from './trading-control/trading-control.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingControlComponent,
    TradingControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
