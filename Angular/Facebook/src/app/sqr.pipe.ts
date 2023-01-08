import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqr'
})
export class SqrPipe implements PipeTransform {

  result:any;
  transform(value:any): unknown {
    
    this.result=value*value;

    return this.result;
  }

}
