import { Injectable } from '@angular/core';
import { Products } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  products:Products[]=[]

  constructor() { }

getCartData(){
  return this.products
}
}
