// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
return deck.map((x)=>x*2)
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
 return deck.reduce((acc,curr)=>{
    if(curr===3)
    {
      acc.push(3);
      acc.push(3);

    }
    acc.push(curr);
   return acc;
  },[]);

}


/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
let l=deck.length;
  return deck.slice(l/2-1,l/2+1)
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
let top=deck.shift();
  let bottom=deck.pop();
  let l=deck.length;
  deck.splice((l/2),0,bottom,top);
  return deck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
return deck.filter((x)=>x==2)
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  
return deck.sort((idx1,idx2)=>{
  if(idx1<idx2)
  {
    return -1;
  }
  else if(idx1>idx2)
  {
    return 1;
  }
  return 0;
})
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
return deck.reverse()}
