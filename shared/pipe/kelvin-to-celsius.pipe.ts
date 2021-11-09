import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {

  transform(kelvin: number): unknown {
    return Math.ceil(kelvin-272.15) + '\u00B0C';
  }

}
