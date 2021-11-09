import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(public http: HttpClient) { }

  getWeatherFromApi(city: string): Observable<ApiResponse>{
    return this.http.get<ApiResponse>("https://api.openweathermap.org/data/2.5/forecast?q="
    + city
    + "&lang=pl&appid=a7d9055a059f093a461a1d5755858aa0");
  }
}
