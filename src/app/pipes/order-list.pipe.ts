import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, property: string | null, sort: string = "asc"): Array<any> {
    if(property == null){
      return value;
    }
    else {
      console.log(property);
      console.log(value);
      const tmpList = value.sort( (a,b) => {
        if (a[property] < b[property] ) {
          return -1;
        }
        else if ( a[property] === b[property] ) {
          return 0;
        }
        else {
          return 1;
        }
      });
      return (sort === 'asc') ? tmpList : tmpList.reverse();
    }
  }

}
