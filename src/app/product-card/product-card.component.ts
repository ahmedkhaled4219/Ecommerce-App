import { Component,Input } from '@angular/core';
import { Products } from '../interface/products';
import { CurrencyPipe, NgClass, NgFor, NgStyle } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe,NgStyle,RouterLink,NgFor,NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input()
  myproduct!: Products;
constructor(private router:Router){

}
  redirctToDetails(id:number){
this.router.navigate(['product-details',id])
}
}
