import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  standalone: true
})
export class ReducePipe<T> implements PipeTransform {

  transform(array: T /*generic type from TS*/[], callbackFn: (accumulator: T, current: T) => T, initialValue: T): T {
    /*  [1,2,3,4].reduce(()=>{
    return accumulator+current
    },0); 
    */
    return array.reduce(callbackFn, initialValue);
  }

}
