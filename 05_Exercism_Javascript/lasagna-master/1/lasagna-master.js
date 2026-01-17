/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer)
{
  
  return (timer)?"Not done, please wait.":(timer === 0)? "Lasagna is done." : 'You forgot to set the timer.'
}
export function preparationTime(layers,avgtime=2)
{
  return layers.length*avgtime;
}
export function quantities(layers)
{
  let n=0,s=0;
  for(let i in layers)
    {
      if(layers[i]==='noodles')n++;
      else if (layers[i]==='sauce') s++;
    }
  console.log(s)
  let obj={
  noodles:50*n,
  sauce:0.2*s
  }
  
  
  return obj;
}
export function addSecretIngredient(friendsList,myList)
{
  myList.push(friendsList[friendsList.length-1]);
  console.log(myList);
}
export function scaleRecipe(recipe,scale)
{
  let r1={...recipe}
  for( let i in r1){
    r1[i]*=(scale/2);
  }
  console.log(recipe);
  return r1;
}