import { Injectable } from '@angular/core';
import { ProductDetails } from '../Interfaces/product-details';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartInfo } from '../Interfaces/cart-info';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }


   private PRODUCT_DATA: ProductDetails[] = [
    { Id: 1, ProductName: 'Samsung Galaxy S24', Price: 74999, Category: 'Electronics', Quantity: 18 },
    { Id: 2, ProductName: 'HP Pavilion', Price: 62999, Category: 'Laptop', Quantity: 6 },
    { Id: 3, ProductName: 'Sony WH-1000XM5', Price: 29999, Category: 'Accessories', Quantity: 20 },
    { Id: 4, ProductName: 'Adidas Ultraboost', Price: 11999, Category: 'Footwear', Quantity: 14 },
    { Id: 5, ProductName: 'Samsung 55" Smart TV', Price: 52999, Category: 'Electronics', Quantity: 5 },
    { Id: 6, ProductName: 'Philips Air Fryer', Price: 10999, Category: 'Appliances', Quantity: 16 },
  ];
  private cartId = 0;

  private cartsSubject = new BehaviorSubject<CartInfo[]>([]);
  carts$: Observable<CartInfo[]> = this.cartsSubject.asObservable();

  GetProducts(): ProductDetails[] {
    return this.PRODUCT_DATA;
  }

  AddProductToCarts(product: ProductDetails) {
    const carts = [...this.cartsSubject.value];

    const cart = carts.find(c => c.ProductId === product.Id);
    if (product.Quantity <= 0) return;

    product.Quantity--;

    if (cart) {
      cart.Quantity++;
      cart.TotalPrice = cart.Quantity * cart.Price;
    } else {
      this.cartId++;
      carts.push({
        Id: this.cartId,
        ProductId: product.Id,
        Quantity: 1,
        Price: product.Price,
        Name: product.ProductName,
        TotalPrice: product.Price
      });
    }

    this.cartsSubject.next(carts);
  }

  RemoveOneQuantity(cartId: number) {
    const carts = [...this.cartsSubject.value];
    const cart = carts.find(c => c.Id === cartId);
    if (!cart) return;

    const product = this.PRODUCT_DATA.find(p => p.Id === cart.ProductId);
    if (!product) return;

    product.Quantity++;
    cart.Quantity--;
    cart.TotalPrice = cart.Quantity * cart.Price;

    if (cart.Quantity === 0) {
      const updated = carts.filter(c => c.Id !== cartId);
      this.cartsSubject.next(updated);
    } else {
      this.cartsSubject.next(carts);
    }
  }

  RemoveCart(cartId: number) {
    const carts = [...this.cartsSubject.value];
    const cart = carts.find(c => c.Id === cartId);
    if (!cart) return;

    const product = this.PRODUCT_DATA.find(p => p.Id === cart.ProductId);
    if (product) product.Quantity += cart.Quantity;

    this.cartsSubject.next(carts.filter(c => c.Id !== cartId));
  }

ClearCart() {
  const carts = this.cartsSubject.value;

  this.PRODUCT_DATA.forEach(product => {
    const cartItem = carts.find(c => c.ProductId === product.Id);
    if (cartItem) {
      product.Quantity += cartItem.Quantity; // ✅ mutation
    }
  });

  this.cartsSubject.next([]);
}



  GetTotalBillPrice(): number {
    return this.cartsSubject.value.reduce(
      (sum, cart) => sum + cart.TotalPrice, 0
    );
  }

  GetTotalQuantity(): number {
    return this.cartsSubject.value.reduce(
      (sum, cart) => sum + cart.Quantity, 0
    );
  }
}


