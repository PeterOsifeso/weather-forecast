import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelcius'
})
export class KelvinToCelciusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value - 273.15).toFixed() + '°C';
  }

}
