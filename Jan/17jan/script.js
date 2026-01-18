// process.stdout.write('Hello ');
// process.stdout.write('World');

// let prompt = require('prompt')();

// let a = prompt('Enter a number:');
// process.stdout.write(a);

// let prompt = require('prompt-sync')();
// let n = Number(prompt('Enter a number:'));
// for(let i = 1;i<=n;i++){
//   process.stdout.write('*');
// }

// let mood='happy';
// console.log(mood.repeat(5));

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));
// for (let i = 0; i < n; i++) {
//   process.stdout.write("*");
// }

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number:"));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    process.stdout.write("*");
  }
  console.log("*");
}
