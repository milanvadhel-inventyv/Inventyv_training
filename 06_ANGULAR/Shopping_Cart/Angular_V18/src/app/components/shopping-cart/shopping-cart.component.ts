import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartInfo } from '../../Interfaces/cart-info';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,AsyncPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  carts$: Observable<CartInfo[]>;

  constructor(private cartService: ShoppingCartService) {
    this.carts$ = this.cartService.carts$;
  }

  RemoveOneItemQuantity(cartId: number) {
    this.cartService.RemoveOneQuantity(cartId);
  }

  ClearItem(cartId: number) {
    this.cartService.RemoveCart(cartId);
  }

  ClearAllItem() {
    this.cartService.ClearCart();
  }

  TotalBillPrice() {
    return this.cartService.GetTotalBillPrice();
  }
  
}
