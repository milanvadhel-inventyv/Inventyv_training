import { Component, inject } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductDetails } from './Interfaces/product-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_V16';
  shoppingCartService:ShoppingCartService=inject(ShoppingCartService);
  products:ProductDetails[]=[];

  constructor()
  {

  }
  ngOnInit()
  {
        this.products=this.shoppingCartService.GetProducts();

    console.log("NgonInit::"+this.products)
  }
  AddToCart(Product:ProductDetails)
  {
    this.shoppingCartService.AddProductToCarts(Product);
  }
  TotalQuantity()
  {
    return this.shoppingCartService.GetTotalQuantity();
  }
}
