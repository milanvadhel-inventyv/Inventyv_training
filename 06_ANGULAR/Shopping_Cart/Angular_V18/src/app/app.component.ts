import { Component,  inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductDetails } from './Interfaces/product-details';
import {MatCardModule}  from '@angular/material/card';
import {MatButtonModule}  from '@angular/material/button';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatCardModule,MatButtonModule,ShoppingCartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_V18';
  shoppingCartService:ShoppingCartService=inject(ShoppingCartService);
  products:ProductDetails[]=[];

  constructor()
  {
    this.products=this.shoppingCartService.GetProducts();

  }
  ngOnInit()
  {
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
