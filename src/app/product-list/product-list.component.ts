import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Products } from '../interface/products';
import { ProductsRequestsService } from '../services/products-requests.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
 products!:Array<Products>
constructor(private productsRequests:ProductsRequestsService){}

ngOnInit(){
  this.productsRequests.getProductsList().subscribe((res:any)=>this.products=res.products)

}
}
