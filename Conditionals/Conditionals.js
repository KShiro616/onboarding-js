console.log(`
-                 --Ez--                   -
`)
//                   1                     //
let num1 = 7;

let num2 = 5;

if (num1 > num2) {  
  console.log(`
  ${num1}`)
} else {
  console.log(`
  ${num2}`);
};

//                    2                    //

num2 = 7;

if (num1 > num2) {
  console.log(num1)
} else if (num1 < num2) {
  console.log(num2)
} else if (num1 === num2){
  console.log(`
  The numbers are equal! (num1: ${num1}, num2: ${num2})
  `)
} ;

//                    3                    //

num1 = 129319282122146;

if (num1 === num2) {
  console.log(`
  The numbers are equal!
  `)
} else if (num1 !== num2) {
  console.log(`
  The numbers are different! (num1: ${num1}, num2: ${num2})
  `) //Are they? 
};

console.log(`-                 ----                   -`);

//                    4                    //

/*Acá tambien incluí en caso de que date2 sea mayor que date1 lo imprima en consola */

let date1 = "2018-9-2";

let date2 = "2023-7-5";

if (date1 > date2) {
  console.log(`
  The date 1: ${date1}, is greater than the date 2: ${date2} 
  `)
} else if (date2 > date1) {
  console.log(`
  The date 2: ${date2}, is greater than the date 1: ${date1} 
  `)
} else if (date1 == date2) {
  console.log(`
  The dates are the same
  `)
};

//                    5                    //

date1 = "2024-6-6";

date2 = "2022-6-6";

if (date1 > date2) {
  console.log(`
  The date 1: ${date1}, is greater than the date 2: ${date2} 
  `)
} else if (date2 > date1) {
  console.log(`
  The date 2: ${date2}, is greater than the date 1: ${date1} 
  `)
} else if (date1 == date2) {
  console.log(`
  The dates are the same
  `)
};


date1 = "2025-9-2";

date2 = "2025-9-2";

if (date1 > date2) {
  console.log(`
  The date 1: ${date1}, is greater than the date 2: ${date2} 
  `)
} else if (date2 > date1) {
  console.log(`
  The date 2: ${date2}, is greater than the date 1: ${date1} 
  `)
} else if (date1 == date2) {
  console.log(`
  The dates are the same (${date1})
  `)
};

//                    6                    //

console.log(`-                 ----                   -`);


let number1 = 1879139;

let number2 = 72113;

let number3 = 954343;

if (number1 > number2 && number1 > number3) {
  console.log(`
  The number 1: ${number1}, is the largest
  `); 
} else if (number2 > number1 && number2 > number3) {
  console.log(`
  The number 2: ${number2}, is the largest
  `);
} else if (number3 > number1 && number3 > number2) {
  console.log(`
  The number 3: ${number3}, is the largest
  `);
};

console.log(`-                 ----                   -`);

console.log(`
-                 --Medium--                   -
`);

const colorToInput = prompt("Please type in a color! (Red, Green, Blue)")


 //


switch (colorToInput) {
  case "Red": alert("The color of fresh, viscous blood! Yummy!");
    break;
  case "Blue": alert("The weirdest color in nature!");
    break;
  case "Green": alert("The color of nature... at least most of it!");
  default: alert("You had only one descriptive, simple task...")
    break;
};

console.log(`-                 ----                   -`);

let numb1 = prompt("Input the first number! (1-100)");

let numb2 = prompt("Input the second number! (1-100)");


let operation = prompt("What operation should be executed? (addition, subtraction, multiplication, division)")

switch (operation) {

  case "addition": alert(`The sum of ${numb1} and ${numb2} is: ${parseInt(numb1) + parseInt(numb2)}!`);
    break;
  
  case "subtraction": alert(`The rest of ${numb1} and ${numb2} is:${parseInt(numb1) - parseInt(numb2)}!`);
    break;
  
  case "multiplication": alert(`The product of ${numb1} and ${numb2} is: ${parseInt(numb1) * parseInt(numb2)}!`);
    break;
  case "division": alert(`The division of ${numb1} and ${numb2} is: ${parseInt(numb1) / parseInt(numb2)}!`);

  default:
    break;
};

console.log(`-                 ----                   -`);

let person1 = {
  name: "Juan",
  age: 39,
  height:  1.69
}

let person2 = {
  name: "Rosa",
  age: 29,
  height:  1.59
}

if (person1.height > person2.height && person1.age > person2.age ) {
  console.log(`${person1.name} is taller and older than ${person2.name}`)
} else if (person2.height > person1.height && person2.age > person1.age ) {
  console.log(`${person2.name} is taller and older than ${person1.name}`)
};


console.log(`-                 ----                   -`);

let driverName = prompt("Input your Name!");

let driverAge = prompt("Input your Age!");

let driverHeight = prompt("Input your Height in cm!");

let driverVision = prompt("How good is your vision from 1 to 10?");

if (parseInt(driverAge) >= 18 && parseInt(driverHeight) >= 110 && parseInt(driverVision)>= 8) {
  console.log(`Great ${driverName}! You're qualified to drive!`)
} else {
  console.log(`it seems like you're not qualified to drive, ${driverName}!`)
};

console.log(`-                 ----                   -`);


let whatsMyAge = prompt("What's your age?")


if (parseInt(whatsMyAge) >= 0 && parseInt(whatsMyAge) <= 12) {
  alert("You're an infant!")
} else if (parseInt(whatsMyAge) >= 13 && parseInt(whatsMyAge) <= 18) {
  alert("You're an adolescent!")
} else if (parseInt(whatsMyAge) >= 19 && parseInt(whatsMyAge) <= 45) {
  alert("You're older-young!")
} else if (parseInt(whatsMyAge) > 45) {
  alert("Oh, un jubilado")
} else if (parseInt(whatsMyAge) > 100) {
  alert("Are you really THAT old?") }

console.log(`-                 ----                   -`);


let oneToThreeNumber = prompt("Enter a number from 1 to 3 only!")
let otherNumericalData = prompt("Try anything else?") //no entendí si tenía que crear otro prompt- "... and then any other numerical data"

if (typeof parseInt(oneToThreeNumber) === "number" && parseInt(oneToThreeNumber) >= 1 && parseInt(oneToThreeNumber) <= 3) {
  console.log(`
  The number entered is ${oneToThreeNumber}.
  Twice the number entered is ${parseInt(oneToThreeNumber) * 2}.
  Three times the number entered is ${parseInt(oneToThreeNumber) * 3}.
  `) 
} else console.log("That value is not allowed");s
console.log(`
-                 --high--                   -
`);


let customerName = prompt("Enter your name.");

let customerPass = prompt("Do you have a VIP or a normal pass?");

let customerEntrance = prompt("Do you have an entrance?");

if (customerName === "Nicolas Rodriguez" || customerPass.toLowerCase() === "vip") {
  alert("Welcome back sir!")
} else if (customerEntrance.toLowerCase() === "yes") {
  if (prompt("Do you wanna use it?").toLowerCase() === "yes") {
    alert("Welcome then!")
  } else {
    alert("Farewell then!")};
} else {
  let ticketLess = prompt("Would you like to buy a ticket?");
  if (ticketLess.toLowerCase() === "yes") {
    let ticketSale = prompt("Very well then! What's your available money?")
    if(typeof parseInt(ticketSale) === "number" && parseInt(ticketSale) >= 1000) {
      alert(`Success! Welcome! Your change is ${parseInt(ticketSale) - 1000}`)
    } else {
      alert("It seems you cannot afford the entry!")}
  } else alert("Farewell then!")
} 

console.log(`-                 ----                   -`);


