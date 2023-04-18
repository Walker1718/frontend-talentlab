import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateLetter'
})
export class TruncateLetterPipe implements PipeTransform {

  transform(value: string , length: number, symbol: string): string {
    value = value.substring(0,1);

    return value + symbol;
  }

}
