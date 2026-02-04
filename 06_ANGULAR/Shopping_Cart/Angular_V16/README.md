# Angular Shopping Cart Application (V16)

This is a shopping cart application built with Angular 16, demonstrating core e-commerce functionality including product display, cart management, and billing calculations.

## Features

- **Product Display**: Browse available products with details like name, price, category, and quantity
- **Add to Cart**: Easily add products to the shopping cart
- **Cart Management**:
  - View cart items with real-time updates
  - Remove individual item quantities
  - Remove entire items from cart
  - Clear all items at once
- **Billing Calculations**: Automatic calculation of total quantity and bill price
- **Responsive UI**: Built with Angular Material for a modern, responsive interface


## Key Components

### AppComponent

- Displays the list of available products
- Handles adding products to cart
- Shows total cart quantity

### ShoppingCartComponent

- Manages cart items display using reactive observables
- Provides functionality to modify cart contents
- Calculates and displays total bill price
- Uses `async` pipe for automatic subscription management

### ShoppingCartService

- Manages cart state using RxJS BehaviorSubject for reactive state management
- Provides methods for cart operations
- Calculates totals and manages cart persistence
- Emits cart updates through observables for real-time UI updates

## Interfaces

### ProductDetails

```typescript
interface ProductDetails {
  Id: number;
  ProductName: string;
  Price: number;
  Category: string;
  Quantity: number;
}
```

### CartInfo

```typescript
export interface CartInfo {
    Id:number,
    ProductId:number,
    Quantity:number,
    Name:string,
    Price:number,
    TotalPrice:number
}

```


