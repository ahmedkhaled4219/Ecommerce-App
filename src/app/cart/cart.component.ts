import { Component } from '@angular/core';
import { CounterServiceService } from '../services/counter-service.service';
import { CartDataService } from '../services/cart-data.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { EmptyCartComponent } from '../empty-cart/empty-cart.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor,CurrencyPipe,NgIf,EmptyCartComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  
  counter = 0;
  mycart =this.cartData.getCartData();
  totalprice=0  
  constructor(private counterService: CounterServiceService,private cartData:CartDataService) {}

  ngOnInit() {
    this.calculateTotalPrice(); 
    this.counterService.getCounter().subscribe((value) => (this.counter = value));
    
  }
   


  decreaseCounter(item:any) {
    if(this.counter>0 &&item.quantity>0){
      this.counterService.updateCounter(this.counter - 1);
      item.quantity-- 
    }
    if (item.quantity === 0) {
      this.removeFromCart(item);
    }
    this.calculateTotalPrice(); 
  }

  increaseCounter(item:any) {
   if(item.quantity<item.stock){
    this.counterService.updateCounter(this.counter + 1);
    item.quantity++
   }
    this.calculateTotalPrice();  
  }


  removeFromCart(item: any) {
    this.counterService.updateCounter(this.counter - item.quantity);

    const index = this.mycart.indexOf(item);

    
    if (index !== -1) {
      this.mycart.splice(index, 1);
    }
    this.calculateTotalPrice(); 
  }

calculateTotalPrice() {
  this.totalprice = this.mycart.reduce((total, item) => total + (item.price * item.quantity), 0);
}
}
