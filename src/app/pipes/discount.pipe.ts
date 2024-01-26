import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(price: number, discountPercentage:number): number {
    if (!price || !discountPercentage) {
      return price;
    }

    const discountAmount = (price * discountPercentage) / 100;
    const discountedPrice = price - discountAmount;

    return +discountedPrice.toFixed(1);
  }  
}


