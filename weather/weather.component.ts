import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../shared/model/ApiResponse';
import { WeatherApiService } from '../shared/services/weather-api.service';

@Component({
  selector: 'my-app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  city: string;
  weatherApiData: ApiResponse;

  constructor(public api: WeatherApiService) { }

  ngOnInit(): void {
  }

  getCityFromUser(city: string): ApiResponse{
    this.weatherApiData = undefined;
    this.api.getWeatherFromApi(city).subscribe(data => {
      this.weatherApiData = data;
      console.log(this.weatherApiData);
    });
    return this.weatherApiData;

  }

}
