/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
function PizzaOptions(extras,price) {
  if(extras.length==0)
  {
    return price;
  }
  let items=extras.shift();
 
  if(items == "ExtraSauce" )
  {
    price+=1;
  }
  else if(items=='ExtraToppings') {
    price+=2;
  }
  return PizzaOptions(extras,price);
  
}
export function pizzaPrice(pizza, ...extras) {
  console.log(extras)

  let p=PizzaOptions(extras,0);
  console.log(p)
    if(pizza==='Margherita')
    {
      p+=7;
    }
  else if(pizza==='Caprese')
  {
    p+=9;
    
  }
  else{
    p+=10;
  }
  return p;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let price=0;
for(let i=0;i<pizzaOrders.length;i++)
  {
    console.log(pizzaOrders[i]);
    
    price+=pizzaPrice(pizzaOrders[i].pizza,...pizzaOrders[i].extras)
    console.log(price)
  }
  return price;
}
