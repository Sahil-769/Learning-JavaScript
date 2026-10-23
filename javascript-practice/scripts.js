// Practice - 01

// 1. Variables, operators and conditionals
// Electricity Bill Calculator
// Input units consumed and calculate the bill using different rates for different unit ranges.Practice: Variables, prompt(), Number(), if/else, operators

// let inputUnit=parseInt(prompt("Enter the units consumed: "));
// //I will assume their is 0-200 unit is equal to 3 rupees
// //I will assume their is 201-400 unit is equal to 4.5 rupees
// //I will assume their is 401-800 unit is equal to 6.8 rupees

// console.log(typeof(inputUnit));
//Important thing which is you have to understad

// if(0<=inputUnit<=200 ){ //It is meaning is  for inputUnit 5000 is 

// 0 <= 5000 evaluates to true.
// In JavaScript, true coerces to the number 1.
// 1 <= 200 evaluates to true.


//     console.log(`Your Electricity Billing Amount is ${inputUnit*3}`);
// }
// else if(201<=inputUnit<=400){
//     console.log(`Your Electricity Billing Amount is ${inputUnit*4.5} . PLease pay this ammout because you are in a Medium Risk`);
// }
// else{
//     console.log(`Your Electricity Billing Amount is ${inputUnit*6.8} . PLease pay this ammout to avoid Disconnection because you are in a High Risk`);



// }
// if(inputUnit<=200 ){
//     console.log(`Your Electricity Billing Amount is ${inputUnit*3}`);
// }
// else if(inputUnit<=400){
//     console.log(`Your Electricity Billing Amount is ${inputUnit*4.5} . PLease pay this ammout because you are in a Medium Risk`);
// }
// else{
//     console.log(`Your Electricity Billing Amount is ${inputUnit*6.8} . PLease pay this ammout to avoid Disconnection because you are in a High Risk`);
// }

// 2. Loops and strings
// Number Guessing Game
// Generate a random number between 1 and 100. Let the user guess until they get it right.Practice: Loops, Math.random(), comparisons
// let randomNumber = parseInt(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
// console.log("The random Number is ",randomNumber);
// while(true){
//     let inputNumber=parseInt(prompt("Enter the Number"));
//     if(inputNumber == randomNumber){
//         console.log("You Won the Number Congratulation  ");
//         break;
//     }
// }


// 3. Arrays
// Student Marks Manager
// Store marks of 5 students and calculate total, average, highest mark and lowest mark.

// let stuMarks=[];
// for (let i = 1; i<=5; i++) {
//     let inputNum=parseInt(prompt(`Enter the Student Marks of Subject ${i} :`));
//     stuMarks.push(inputNum);
// }
// let sum=0;
// for (const element of stuMarks) {
//     sum+=element;
// }

// let avg=sum/stuMarks.length;
// console.log(avg);
