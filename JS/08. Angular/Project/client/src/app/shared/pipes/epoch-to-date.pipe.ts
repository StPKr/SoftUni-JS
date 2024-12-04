import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epochToDate',
  standalone: true
})
export class EpochToDatePipe implements PipeTransform {

  transform(date: number, ...args: unknown[]): unknown {
    
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23'
    }).format(new Date(date));
  }

}
