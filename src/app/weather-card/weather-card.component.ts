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
  humidity: number;

  constructor(private weather: WeatherService) {}

  ngOnInit(): void {}

  getWeather(event: any) {
    event.preventDefault();
    this.weather.getWeatherData(this.city, this.key).subscribe((data) => {
      this.iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      this.weatherDescription = data.weather[0].description;
      this.temperature = data.main.temp - 273.15;
      this.humidity = data.main.humidity;
    });
  }
}
