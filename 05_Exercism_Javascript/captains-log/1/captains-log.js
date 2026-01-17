// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
let min=1000,max=10000;
  let ans=Math.floor(min+Math.random()*(max-min))
  return `NCC-${ans}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
let min=41000.0,max=42000.0;
return min+Math.random()*(max-min)
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
 let arr=['D','H','J','K','L','M','N','R','T','Y']
  let i=1,j=11;
  let ind=Math.floor(i+Math.random()*(j-i));
  return arr[ind-1];
}
