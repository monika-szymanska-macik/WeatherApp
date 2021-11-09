import { Component, Input, OnInit } from '@angular/core';
import { WeatherForecast } from 'src/app/shared/model/WeatherForecast';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-week-forecast',
  templateUrl: './week-forecast.component.html',
  styleUrls: ['./week-forecast.component.scss']
})
export class WeekForecastComponent implements OnInit {

  @Input()
  weeklyForecast: WeatherForecast[];
  weeklyForecastMap: Map<string, WeatherForecast[]>;

  constructor() { }

  ngOnInit(): void {
    this.mapData();
  }

  mapData(){
    this.weeklyForecastMap = new Map();
    this.weeklyForecast.forEach(forecast => {
      let day = this.weeklyForecastMap.get(forecast.day);
      if(day == undefined){
        this.weeklyForecastMap.set(forecast.day, [forecast]);
      }else{
        this.weeklyForecastMap.set(forecast.day, [...day, forecast]);
      }
    });
    console.log(this.weeklyForecastMap);
  }

  asIsOrder(a, b){
    return 1;
  };

}
