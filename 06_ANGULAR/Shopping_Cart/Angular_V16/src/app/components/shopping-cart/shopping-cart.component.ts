import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartInfo } from 'src/app/Interfaces/cart-info';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
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
