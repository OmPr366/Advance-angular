import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initialName'
})
export class InitialNamePipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
      let values =  value.split(' ')
    return values[0][0] + values[1][0];
  }

}
