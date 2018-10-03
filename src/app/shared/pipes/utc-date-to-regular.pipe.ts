import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utcDateToRegular'
})
export class UtcDateToRegularPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date( value * 1000);
    return date.toLocaleDateString('en-GB').split('/').join(args);
  }
}
