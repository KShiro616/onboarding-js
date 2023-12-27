// let askForNumber = prompt("Please enter a number between 1 and 100!");

// if (askForNumber!==isNaN && askForNumber > 0 && askForNumber <= 100 ) {
//   for (let i = askForNumber; i !== 0; i--) {
//     console.log(i) 
//   }
// } else alert("Either not a number or not in range!");

// ------------



// let askForNumber = prompt("Please enter a number between 1 and 10!");

// if (askForNumber!==isNaN && askForNumber > 0 && askForNumber <= 10) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(askForNumber * i) 
//   }
// } else alert("Either not a number or not in range!");


// ------------

// let result = 0;

// let enterNumber = prompt("Enter a number! (0 to stop!)");

// while ( enterNumber != 0) {

//   let number = parseInt(enterNumber)
  
//   result+= number;

//   enterNumber = prompt("Enter a number! (0 to stop!)")
// }

// console.log(result);

// ---------

// let fortniteItems = {
//   firstItem: "Shotgun",
//   secondItem: "Assault Rifle",
//   thirdItem: "Sniper Riffle",
//   fourthItem: "Movility Item",
//   fifthItem: "Healing Item"

// }

// for (const property in fortniteItems) {
//   console.log(property) //por cada propiedad me muestra la key.
// }

// for (const key in fortniteItems) {
//   console.log(fortniteItems[key]) //por cada propiedad nos muestra el valor de la key.
// }

// ----------

// let secretNumber = result;

// let userNumber = 0;

// let attemps = 0;

// for (let i = 0; userNumber != secretNumber ; i++) {
  
//   attemps+= i;
//   let enterANumber = prompt("Enter a number and try to match the secret number!")
//   userNumber = enterANumber
//   if (userNumber == secretNumber) {
//     console.log(`You got it right! The secret number was ${userNumber} and you made ${attemps} attempts`)
//   } else if (userNumber > secretNumber) {
//     console.log("the number entered is greater than the secret")
//   } else if (userNumber < secretNumber) {
//     console.log("the number entered is less than the secret")
//   }
  
// }

// ----------

// let getDivisors = prompt("Enter a number to get its divisors!");

// for (let i = getDivisors; i >= 0; i--) {
//   if (getDivisors % i === 0) console.log(i);
  
// }

//  ------------

// function RingBell() {

//   return "Ding Dong,"

// }

// let dongs = "";

// let howManyDongs = prompt("Ring that bell!");

// for (let i = howManyDongs; i > 0; i--) {
//   dongs+= RingBell()

// };

// console.log(dongs)

// --------

// const dateLimit = "1997-8-3";

// const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"];

// for (const date of dates) {
//   if (date > dateLimit) {
//     console.log(date)
//   }
// }

// ---------

// let colours = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"];

// for (const color of colours) {
//   console.log(color)
  
// };

//------------

// function reusableFunction(array) {
//   for (const element of array) {
//     console.log(element)
//   }  
// }

// reusableFunction([1,2,3,4,5,6,7])

// -----------

// let array = [1,2,3,4,5,6]

// for (const element of array) {
//   console.log(`The number is ${element} and its double is ${element * 2}`)
// }

// --------

// let family = [
//   {name: "Maria", lastName: "Lopez", role: "Mother", age: "40"},
//   {name: "Juan", lastName: "Perez", role: "Father", age: "38"},
//   {name: "Romina", lastName: "Peres", role: "Daugther", age: "13"},
//   {name: "Tomas", lastName: "Peres", role: "Son", age: "10"}
// ];

// function presentFamily(array) {
//   for (const element of array) {
//     console.log(`Hello, im ${element.name} ${element.lastName} (${element.role}) and I'm ${element.age} years old)`);
//     console.log(typeof element); //Pedía esto?
//     console.log(element);

//   }
// }

// presentFamily(family)

// --------


// let oddNumbers = 0;
// let evenNumbers = 0;
// let enterNumber = prompt("Enter a number! (0 to stop!)");

// while ( enterNumber != 0) {

//   let number = parseInt(enterNumber);

//   if (number % 2 === 0) {
//     evenNumbers+= number;
//   } else oddNumbers+= number;
//   enterNumber = prompt("Enter a number! (0 to stop!)");
// }

// console.log(`
// even numbers: ${evenNumbers}
// odd numbers: ${oddNumbers}
// `)

// ------ 

//el infame sort hecho de forofs

let Array = [10,2,3,4,5234,6,7,8]
let highestNumber = 0;
for (const Q of Array) {
  for (const K of Array) {
    if (K > Q) highestNumber = K;
  }
}

console.log(highestNumber)









