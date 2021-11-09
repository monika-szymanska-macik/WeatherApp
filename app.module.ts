import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './weather/main/main.component';
import { TodayForecastComponent } from './weather/main/today-forecast/today-forecast.component';
import { WeekForecastComponent } from './weather/main/week-forecast/week-forecast.component';
import { HeaderComponent } from './weather/header/header.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherApiService } from './shared/services/weather-api.service';
import { KelvinToCelsiusPipe } from './shared/pipe/kelvin-to-celsius.pipe';
import { FirstLetterUppercasePipe } from './shared/pipe/first-letter-uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TodayForecastComponent,
    WeekForecastComponent,
    HeaderComponent,
    WeatherComponent,
    KelvinToCelsiusPipe,
    FirstLetterUppercasePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
