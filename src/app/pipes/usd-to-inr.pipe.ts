import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToInr'
})
export class UsdToInrPipe implements PipeTransform {


  // value is coming from element 
  // args -- values passed from pipe, single value --> [x], double values --> [x,y]
  transform(value: number, ...args: number[]): number {
    let [x]=args
    return value*x;
  }

}
