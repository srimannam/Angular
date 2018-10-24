import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatprice'
})
export class FormatpricePipe implements PipeTransform {

  transform(target: any, price: number): any {
    if(price>50000){
      return target+" (12%)";
    }else if(price>20000){
      return target+" (10%)";
    }else if(price>15000){
      return target+" (8%)";
    }else if(price>10000){
      return target+" (5%)";
    }
    return target+" (3%)";
  }

}
