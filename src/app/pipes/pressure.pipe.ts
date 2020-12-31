import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pressure'
})
export class PressurePipe implements PipeTransform {

  transform(pressure: number, ...args: unknown[]): string {
    return pressure + ' hPa';
  }

}
