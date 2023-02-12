import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'followers',
})
export class FollowersPipe implements PipeTransform {
  transform(num: number): string {
    if (num >= 1000 && num !== undefined) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return '';
  }
}
