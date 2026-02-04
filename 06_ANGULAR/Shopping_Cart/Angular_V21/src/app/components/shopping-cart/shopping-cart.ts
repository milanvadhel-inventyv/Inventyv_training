import { ChangeDetectorRef, Component, computed, effect, inject, Input, OnChanges, output, Output, Signal, signal, SimpleChanges } from '@angular/core';
import { ProductDetail } from '../../Interfaces/product-detail';
import { CartDetail } from '../../Interfaces/cart-detail';
import { ShoppingCartService } from '../../services/shopping-cart-service';
import { MatButtonModule } from '@angular/material/button';
import {  MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-shopping-cart',
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart  {
 
  cartService:ShoppingCartService=inject(ShoppingCartService)
  Carts=signal<CartDetail[]>([]);
  TotalBillPrice=signal<number>(0);
  // constructor(private cdr:ChangeDetectorRef){
  
  // }
  ngOnInit()
  {
   this.Carts=this.cartService.GetCarts();
  //  console.log("NgonInit in CHild",this.Carts());
  }
  ClearItem(Id:number)
  {
    this.cartService.ClearCart(Id);
    // this.cdr.detectChanges();
  }
  ClearAllItem(){
    this.cartService.MakeWholeCart();
  }
  RemoveOneItemQuantity(Id:number)
  {

    this.cartService.RemoveOneCart(Id);
        // this.cdr.detectChanges();
    console.log("RemoveByOne",this.Carts())
    
  }

  ngDoCheck()
  {
    this.TotalBillPrice.set(this.Carts().reduce((sum,c)=>sum+=c.TotalPrice,0))
    console.log("NgDocheck"+ this.Carts());
  }
}
