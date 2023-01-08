import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube'
})
export class CubePipe implements PipeTransform {

  result:any
  transform(value: any,): unknown {
    
    this.result=value * value * value;

    return this.result;
  }

}
