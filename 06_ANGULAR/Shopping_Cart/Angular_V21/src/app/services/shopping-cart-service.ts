import { computed, Injectable, signal, Signal } from '@angular/core';
import { ProductDetail } from '../Interfaces/product-detail';
import { CartDetail } from '../Interfaces/cart-detail';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  PRODUCT_DATA= signal<ProductDetail[]> ([
  {
    Id:1,
    ProductName: 'Samsung Galaxy S24',
    Price: 74999,
    Category: 'Electronics',
    Quantity: 18
  },
  {
    Id:2,
    ProductName: 'HP Pavilion',
    Price: 62999,
    Category: 'Laptop',
    Quantity: 6
  },
  {
        Id:3,
    ProductName: 'Sony WH-1000XM5',
    Price: 29999,
    Category: 'Accessories',
    Quantity: 20
  },
  {
        Id:4,

    ProductName: 'Adidas Ultraboost',
    Price: 11999,
    Category: 'Footwear',
    Quantity: 14
  },
  {
    Id:5,
    ProductName: 'Samsung 55" Smart TV',
    Price: 52999,
    Category: 'Electronics',
    Quantity: 5
  },
  {
    Id:6,
    ProductName: 'Philips Air Fryer',
    Price: 10999,
    Category: 'Appliances',
    Quantity: 16
  },

]);

Carts=signal<CartDetail[]>([]);
private Id:number=0;



GetProductData():Signal<ProductDetail[]>{
  return this.PRODUCT_DATA;
}
TotalQuantity=signal<number>(0);
GetProductDataWithChange(Id:number)
{
   const product=this.PRODUCT_DATA().find(product=>product.Id===Id)
   
   if(product!=null){
    product.Quantity=product?.Quantity-1;
      const cart=this.Carts().find(cart=>cart.ProductId===Id);
    if(!cart)
    {
      this.Id++;
      this.Carts().push({
        Id:this.Id,
        Name:product.ProductName,
        TotalPrice:product.Price,
        Price:product.Price,
        Quantity:1,
        ProductId:product.Id
      })
    }
    else{
      cart.Quantity=cart.Quantity+1;
      cart.TotalPrice=cart.Price*cart.Quantity;
    }
  }
  this.TotalQuantity.set(this.TotalQuantity()+1);


}
GetCarts(){
  return this.Carts;
}
ClearCart(Id:number)
{
  //  let Index=this.Carts().findIndex((item)=>item.Id===Id);
  
  //    if(Index!=-1)
  //    {
  //      this.PRODUCT_DATA().map((product)=>
  //   product.Id=== this.Carts()[Index].ProductId ?product.Quantity+=this.Carts()[Index].Quantity:product
  // )
  //     this.Carts().splice(Index,1)
  //    }

  const cartItem=this.Carts().find((cart)=>cart.Id===Id);
  this.PRODUCT_DATA.update(products=>products.map((product)=>
    product.Id===cartItem?.ProductId?{...product,Quantity:product.Quantity+cartItem.Quantity}:product
  ))
  this.Carts.update(carts=>
    carts.filter(cart=>
      cart.Id!=cartItem?.Id
    )
  )
  if(cartItem?.Quantity)
    this.TotalQuantity.update(q=>q=q-cartItem?.Quantity)

}

RemoveOneCart(Id:number)
{
   const cartItem=this.Carts().find((cart)=>cart.Id===Id);
  this.PRODUCT_DATA.update(products=>
    products.map(product=>
      product.Id===cartItem?.ProductId?{...product,Quantity:product.Quantity+1}:product
    )
  );
 this.Carts.update(carts=>
  carts.map(cart=>
    cart.Id===Id?{...cart,Quantity:cart.Quantity-1,TotalPrice:cart.TotalPrice-cart.Price}:cart
  )
 );
 if(cartItem?.Quantity==1)
 {
  this.Carts.update(carts=>
    carts.filter(cart=>
      cart.Id!==cartItem.Id
    )
  )
 }
 this.TotalQuantity.set(this.TotalQuantity()-1);

}
MakeWholeCart(){
 const carts=this.Carts();
 this.PRODUCT_DATA.update(products =>
    products.map(product => {
      const cartItem = carts.find(c => c.ProductId === product.Id);
      return cartItem
        ? { ...product, Quantity: product.Quantity + cartItem.Quantity }
        : product;
    })
  );

this.Carts.set([]);
this.TotalQuantity.set(0);
}

}

