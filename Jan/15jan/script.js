// let age = Number(prompt('Enter your age:'));
// if(age>=18){
//     alert('You can vote.')
// }
// else if(age<=18&&age>=0){
//     alert('You can not vote.')
// }
// else{
//     alert('invalid age.')
// }

// -----Discount-----

// 0-5000=>0%
// 5001-7000=>5%
// 7001-9000=>10%
// 9000+ =>20%

// method1

// let amount = Number(prompt('Enter your amount:'));
// if(amount>=0&&amount<=5000){
//     alert(`Your discount is 0% and you have to pay ${amount}rs.`);
// }
// else if(amount>5000&&amount<=7000){
//     alert(`Your discount is 5% and you have to pay ${amount-(amount*0.05)}rs.`);
// }
// else if(amount>7000&&amount<=9000){
//     alert(`Your discount is 10% and you have to pay ${amount-(amount*0.1)}rs.`);
// }
// else if(amount>9000){
//     alert(`Your discount is 20% and you have to pay ${amount-(amount*0.2)}`);
// }
// else{
//     alert('Invalid amount');
// }

// method2
// let amount = Number(prompt('Enter your shopping amount:'));
// let dis;
// if(amount>=0&&amount<=5000){
//     dis=0;
// }
// else if(amount>5000&&amount<=7000){
//     dis=0.05;
// }
// else if(amount>7000&&amount<=9000){
//     dis=0.1;
// }
// else if(amount>9000){
//     dis=0.2;
// }
// else{
//     alert('invalid amount. Please try again.');
// }
// alert(`You got ${dis*100}% discount and your final payable amount is ${amount-(amount*dis)}`);