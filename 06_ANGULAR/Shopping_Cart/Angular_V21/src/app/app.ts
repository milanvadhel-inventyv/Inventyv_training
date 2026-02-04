import { Component, Signal, signal } from '@angular/core';
import { ProductDetail } from './Interfaces/product-detail';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import { ShoppingCart } from './components/shopping-cart/shopping-cart';
import { ShoppingCartService } from './services/shopping-cart-service';
@Component({
  selector: 'app-root',
  imports: [MatButtonModule,MatCardModule,ShoppingCart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   title = "Product-Listings";

  Products!:Signal<ProductDetail[]>;
  TotalQuantity!:Signal<number>;
  constructor(private cartService:ShoppingCartService){
    console.log("Parent Constructor Called::");

  }
  ngOnInit()
  {
    this.TotalQuantity=this.cartService.TotalQuantity;
this.Products=this.cartService.GetProductData();
// console.log("NgOnInit",this.TotalQuantity())
  }
  ngDocheck()
  {
    console.log("App NgDocheck");
  }
  AddToCart(Id:number)
  {
    
    console.log("AddToCart")
    this.cartService.GetProductDataWithChange(Id);
    
  }
}
