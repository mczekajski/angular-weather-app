import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  key = '';
  city = '';
  iconUrl = '';
  weatherDescription = '';
  temperature: number;
  feels_like: number;
  humidity: number;
  pressure: number;

  constructor(private weather: WeatherService) {}

  ngOnInit(): void {}

  getWeather(event: any) {
    event.preventDefault();
    this.weather.getWeatherData(this.city, this.key).subscribe((data) => {
      this.iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      this.weatherDescription = data.weather[0].description;
      this.temperature = data.main.temp;
      this.feels_like = data.main.feels_like;
      this.humidity = data.main.humidity;
      this.pressure = data.main.pressure;
    });
  }
}
