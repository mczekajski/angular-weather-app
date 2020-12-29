import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {

  transform(kelvin: number, ...args: unknown[]): any {
    if (!kelvin) {
      return '';
    }
    let celsius = Math.round(kelvin - 273.15);
    return `${celsius} \u00B0C`;
  }

}
