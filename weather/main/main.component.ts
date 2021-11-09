import { Component, Input, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/shared/model/ApiResponse';
import { WeatherOverall } from 'src/app/shared/model/WeatherOverall';
import { Location } from 'src/app/shared/model/Location';
import { WeatherForecast } from 'src/app/shared/model/WeatherForecast';
import * as moment from 'moment';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input()
  weatherApiData: ApiResponse;

  overallData: WeatherOverall[];
  location: Location;
  weatherForecast: WeatherForecast[];

  todayForecast: WeatherForecast[] = [];
  weeklyForecast: WeatherForecast[] = [];

  constructor() { }

  ngOnInit(): void {
    this.overallData = this.mapWeatherApiDataToWeatherOverall(this.weatherApiData);
    this.location = this.mapWeatherApiToLocation(this.weatherApiData);
    this.weatherForecast = this.mapOverallToWeatherForecast(this.overallData);
    this.mapToWeekForecast();
  }

mapWeatherApiDataToWeatherOverall(weatherApiData: ApiResponse): WeatherOverall[]{
  let overallForecast: Array<WeatherOverall> = [];
  weatherApiData.list.forEach(element => {
      let overall = new WeatherOverall();
      overall.dt = element.dt;
      overall.dt_txt = element.dt_txt;
      overall.temp = element.main.temp;
      overall.temp_kf = element.main.temp_kf;
      overall.temp_max = element.main.temp_max;
      overall.temp_min = element.main.temp_min;
      overall.feels_like = element.main.feels_like;
      overall.pressure = element.main.pressure;
      overall.humidity = element.main.humidity;
      overall.grnd_level = element.main.grnd_level;
      overall.sea_level = element.main.sea_level;
      overall.clouds_all = element.clouds.all;
      overall.wind_speed = element.wind.speed;
      overall.wind_deg = element.wind.deg;
      overall.wind_gust = element.wind.gust;
      overall.weather_id = element.weather[0].id;
      overall.weather_icon = element.weather[0].icon;
      overall.description = element.weather[0].description;
      overallForecast.push(overall);
    });
    return overallForecast;
  }

  mapWeatherApiToLocation(api: ApiResponse){
    let location = new Location();
    location.city = api.city.name;
    location.country = api.city.country;
    return location;
  }

  mapOverallToWeatherForecast(overall: WeatherOverall[]): WeatherForecast[]{
    let keyValuePairs: Array<WeatherForecast> = [];
    overall.forEach(element => {
      let pair = new WeatherForecast;
      let dayName = new Date(element.dt_txt);
      let day = dayName.toLocaleDateString("pl-PL", {weekday: "long"});
      console.log(day);
      let dateFromKey = moment(element.dt_txt).format("DD.MM.YYYY");
      let time = moment(element.dt_txt).format("hh:mm:ss");
      pair.day = day;
      pair.date = dateFromKey;
      pair.hour = time;
      pair.key = element.dt_txt;
      pair.value = element;
      keyValuePairs.push(pair);
    });
    return keyValuePairs;
  }

  mapToWeekForecast(){
    const today = new Date().toString();
    const todayName = new Date();
    let dayName = todayName.toLocaleDateString("pl-PL", {weekday: "long"})
    const firstElement = this.weatherForecast[0];

    this.weatherForecast.forEach(element => {
      if(element.day == dayName || element.day == firstElement.day){
        this.todayForecast.push(element);
      }else{
        this.weeklyForecast.push(element);
      }
    })

    this.weatherForecast
  }
}