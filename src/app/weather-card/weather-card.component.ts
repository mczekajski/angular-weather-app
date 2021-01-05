import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  showPanel = false;
  city = '';
  iconUrl = '';
  weatherDescription = '';
  temperature: number;
  feels_like: number;
  humidity: number;
  pressure: number;

  constructor(private weather: WeatherService) {}

  ngOnInit(): void {}

  handleKeyDown(event: any) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.getWeather(event);
    }
  }

  getWeather(event: any) {
    if (event.target.value) this.showPanel = true;
    this.weather.getWeatherData(event.target.value).subscribe((data) => {
      if (!event.target.value) {
        this.showPanel = false;
        event.target.classList.remove('is-invalid');
        event.target.classList.remove('is-valid');
        this.city = '';
      } else {
        if (data.results.cod === 200) {
          // Set classes
          event.target.classList.remove('is-invalid');
          event.target.classList.add('is-valid');

          // Destructure
          const { temp, feels_like, humidity, pressure } = data.results.main;
          const { icon, description } = data.results.weather[0];
          const { name } = data.results;

          // Assign
          this.showPanel = true;
          this.city = name;
          this.iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
          this.weatherDescription = description;
          this.temperature = temp;
          this.feels_like = feels_like;
          this.humidity = humidity;
          this.pressure = pressure;
        } else {
          // Error
          this.showPanel = false;
          event.target.classList.remove('is-valid');
          event.target.classList.add('is-invalid');
          this.city = '';
        }
      }
    });
  }
}
