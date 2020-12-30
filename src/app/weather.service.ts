import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare const latinise: any;

interface WeatherResponse {
  results: {
    name: string;
    cod: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
    main: {
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  public getWeatherData(city: string) {
    return this.http.get<WeatherResponse>(
      `https://still-earth-15355.herokuapp.com/api/city?q=${latinise(city)}`
    );
  }
}
