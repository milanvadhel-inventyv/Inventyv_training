// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy':return 0.5;
    case 'Energizer'  :return 1.5
    case 'Green Garden':return 1.5;
    case 'Tropical Island':return 3;
    case 'All or Nothing':return 5;
    default:return 2.5;
      
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let i=0;
while(i<limes.length&& wedgesNeeded>0)
  {
    switch(limes[i])
      {
        case 'small':wedgesNeeded-=6;
                    break;
        case 'medium':wedgesNeeded-=8;
                      break;
        case 'large':wedgesNeeded-=10;
                      break;
        
      }
       i++;
  
 
      console.log(i)

  }
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i=0;
  while(i<orders.length)
    {
      timeLeft-=timeToMixJuice(orders[i]);
        i++;
      if(timeLeft<=0)
      {
        break;
      }
    
    }
  return orders.slice(i);
  
}
