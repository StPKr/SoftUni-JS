import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epochToDate',
  standalone: true
})
export class EpochToDatePipe implements PipeTransform {

  transform(date: number, ...args: unknown[]): unknown {

    return date ? new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(new Date(date)) : null;
  }

}
