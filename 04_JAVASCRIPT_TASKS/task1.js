function check(arr2) {
  let sum = arr2.reduce((acc, x) => acc + x, 0);
  console.log(sum);
  return new Promise((resolve, reject) => {
    if (sum > 35) {
      resolve("resolved successfully");
    } else {
      reject("rejected");
    }
  });
}

function fun1() {
  let arr1 = [1, 2, 3, 4, 5];
  first_ele = arr1.shift();
  fun2(first_ele, arr1);
}

function fun2(first_ele, arr1) {
  let arr2 = [6, 7, 8, 9];
  arr2 = [first_ele, ...arr1, ...arr2];
  console.log(arr2);
  check(arr2)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
}
fun1();
