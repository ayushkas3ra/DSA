// let prompt = require("prompt-sync")();
// let arr = [];
// let n = Number(prompt("Enter the length of the array: "));
// for (let i = 0; i < n; i++) {
//   arr.push(Number(prompt(`Enter element no. ${i}: `)));
// }
// console.log(arr);

// let arr = [20, 30, 40, 50, 60];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

// let arr = [10,3,100,123,76,2,34];
// let max = arr[0];
// for(let i = 0 ; i < arr.length ; i++){
//     if(max<arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

let arr = [50, 10, 20, 30, 40];
let max = arr[0];
let max2 = arr[1];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= arr[i + 1]) {
    max = arr[i];
    max2 = arr[i + 1];
  } else {
    max = arr[i + 1];
    max2 = arr[i];
  }
}
console.log(
  `Maximum element of the array is ${max} & 2nd maximum element is ${max2}`,
);
