# Angular Shopping Cart Application (V21)

This is a shopping cart application built with Angular 21, demonstrating core e-commerce functionality including product display, cart management, and billing calculations. This version leverages Angular's signals for reactive state management, providing a more modern and efficient approach to handling component state.

## Key Differences from Previous Versions

- **Signals for State Management**: Uses Angular signals instead of RxJS observables for reactive state
- **Standalone Components**: Continues with Angular's standalone component architecture
- **No NgModules**: Components are self-contained with direct imports
- **Modern Angular Features**: Leverages Angular 21's latest features including signals and improved performance

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

### App Component (Standalone with Signals)

- Displays the list of available products using signals
- Handles adding products to cart
- Shows total cart quantity via signal binding
- Imports required modules directly in the component decorator

### ShoppingCart Component (Standalone with Signals)

- Manages cart items display using signals for reactive updates
- Provides functionality to modify cart contents
- Calculates and displays total bill price
- Uses signal-based state management for automatic reactivity

### ShoppingCartService (Signals-based)

- Manages cart state using Angular signals for reactive state management
- Provides methods for cart operations
- Calculates totals and manages cart persistence
- Uses signals for real-time UI updates without manual subscriptions

## Interfaces

### ProductDetail

```typescript
interface ProductDetail {
  Id: number;
  ProductName: string;
  Price: number;
  Category: string;
  Quantity: number;
}
```

### CartDetail

```typescript
export interface CartInfo {
  Id: number;
  ProductId: number;
  Quantity: number;
  Name: string;
  Price: number;
  TotalPrice: number;
}
```
