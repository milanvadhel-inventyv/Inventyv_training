# Javascript tasks

This file contain the **3 Javascript tasks**


## Task-1

Here in This Task ,  How Promise created and How to use it with some Array Manipulation.

WorkFlow of This Task:

- Here  task contain **3 functions :: fun1,fun2 and check**.

- Inside Fun1 I create array then I take first element of Array By using shift method of array and pass first element  and rest Array to Fun2 function.

- In Fun2, I create  Array with Name arr2.
  After that arr2 conatin first element,arr1 which is Passed from fun1 ,then arr2  In this order.I passed this arr2 to check function that returning the promise.
  and I print the response of check funtion.

- In the **check** function, first I apply the **reduce() method** on the array to find the sum of all elements.  
  Then I create a Promise:
  - If the sum of all elements is **greater than 35**, the Promise is **resolved**
  - Otherwise, the Promise is **rejected**

- Finally, the response returned from the **check** function is handled using `.then()` and `.catch()` and printed to the console.

 ## Task-3

Here in This Task, I focus on understanding **Symbols in JavaScript**,.

WorkFlow of This Task:

- Here task contain **3 functions :: fun1, fun2 and check**.

- Inside **fun1**, I create an array using a **Symbol as a key inside an object**.  
  Then I take the **first element of the array using the shift() method** and pass the first element and the remaining array to the **fun2** function.

- In **fun2**, I create another **Symbol** and use it as a key to store a new array inside an object.  
  After that, I create a new array which contains: the first element received from fun1, the remaining elements of the array,some predefined values  

  All elements are arranged in sequence, and this final array is passed to the **check** function which returns a Promise.

- In the **check** function, first I apply the **reduce() method** on the array to find the sum of all elements.  
  Then I create a Promise:
  - If the sum of all elements is **greater than 35**, the Promise is **resolved**
  - Otherwise, the Promise is **rejected**

- Finally, the response returned from the **check** function is handled using `.then()` and `.catch()` and printed to the console.





