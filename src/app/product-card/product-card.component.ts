import { Component,Input } from '@angular/core';
import { Products } from '../interface/products';
import { CurrencyPipe, NgClass, NgFor, NgStyle } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CounterServiceService } from '../services/counter-service.service';
import { CartDataService } from '../services/cart-data.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe,NgStyle,RouterLink,NgFor,NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() myproduct!: Products;
  counter=0

  constructor(private router:Router,private counterService:CounterServiceService,private cartdata:CartDataService){
  this.counterService.getCounter().subscribe((value) => (this.counter = value));
}

redirctToDetails(id:number){
this.router.navigate(['product-details',id])
}
addToCart(product:Products){
  const existingProduct = this.cartdata.products.find(item => item.id === product.id);

  if (existingProduct) {
    // If the product already exists in the cart, increment its quantity
    existingProduct.quantity++;
  } else {
    // If the product is not in the cart, add it with quantity set to 1
    this.cartdata.products.push({ ...product, quantity: 1 });
  }

  // Log the updated cart data
  console.log(this.cartdata.products);
}



increaseCounter() {
  this.counterService.updateCounter(this.counter + 1);
}
}

