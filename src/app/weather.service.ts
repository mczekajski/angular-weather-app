import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface WeatherResponse {
  weather: [{
    id: number,
    main: string,
    description: string,
    icon: string
  }],
  main: {
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  public getWeatherData(city: string, key: string) {
    return this.http.get<WeatherResponse>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pl`)
  }

}
