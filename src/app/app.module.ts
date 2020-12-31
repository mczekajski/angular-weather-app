import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { KelvinToCelsiusPipe } from './pipes/kelvin-to-celsius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    KelvinToCelsiusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
