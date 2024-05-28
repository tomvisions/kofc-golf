import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayTag',
  standalone: true
})
export class DisplayTagPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    const result = value.map(value => {
      return value['TagId'];
    })
    return result.join(' ')
  }

}
