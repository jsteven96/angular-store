import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';
 
@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string | undefined): string {
    const then = new Date(value ?? '');
    const now = new Date();
    return formatDistance(now, then);
  }

}
