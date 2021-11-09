import { Component, Input, OnInit } from '@angular/core';
import { WeatherOverall } from 'src/app/shared/model/WeatherOverall';
import { Location } from 'src/app/shared/model/Location';
import { WeatherForecast } from 'src/app/shared/model/WeatherForecast';

@Component({
  selector: 'app-today-forecast',
  templateUrl: './today-forecast.component.html',
  styleUrls: ['./today-forecast.component.scss']
})
export class TodayForecastComponent implements OnInit {

  @Input()
  todayForecastData!: WeatherForecast[];

  @Input()
  location!: Location;

  constructor() { }

  ngOnInit(): void {
  }

  metersPerSecondsToKilometersPerHour(metersPerSeconds: number): string{
    return (metersPerSeconds * 3.6).toPrecision(2);

  }
}
