//        Low      //

/* function add() {
  console.log(100 * 20)
}
*/

// --------------

/* add() */

// --------------

/*
function add(param1, param2){
  param1;
  param2;
}
*/

// --------

let number1 = 100;

let number2 = 20;

// -------

function add(param1, param2){
  console.log(param1 * param2 + 1) //Para diferenciar de la funcion anonima.
  return param1 * param2 + 1;
};

add(number1, number2)
// -------

let addFunction = function (param1, param2) {
  console.log(param1 * param2);
  return param1 * param2;
}

addFunction(number1, number2)


//    medium       //

function greet(name) {
  console.log(`Greetings ${name}!`)
}

let name1 = "Pedro"

greet(name1)

// ---------

let anonFunction = function (param1, param2) {
  return param1 * param2;
};

console.log(anonFunction(100, 20))
console.log(anonFunction(40, 100))

// ---------

function area(base, height) {
  return (base * height)/2;
}

// ----------

function perimeter(a,b,c) {
  return a + b + c; 
}

// ---------

function totalPrice(price, quantity) {
  if (quantity >= 10){
    return price * quantity * 0.9;
  } else if (quantity >= 20) {
    return price * quantity * 0.8;
  }

  return price * quantity;  
}

console.log(totalPrice(10, 3))
console.log(totalPrice(10, 10))
console.log(totalPrice(10, 20))

// -----------

function isAnAdult(age) {
  if(typeof age !== "number") return `You must input a number!`
  if (age >= 18) return `You're an adult!`;
  return `You're not an adult`;
}

console.log(isAnAdult(20))
console.log(isAnAdult(5))
console.log(isAnAdult(18))
console.log(isAnAdult(200))
console.log(isAnAdult("aljsid"))

// ---------

function taxi(income) {
  if(typeof income !== "number") return `You must input your income as a number!`;
  if (income <= 10000) return income - income * 0.9;
  if (income > 10000 && income <= 20000) return income - income * 0.85;
  if (income > 20000) return income -income * 0.8;
}

console.log(taxi(1000))
console.log(taxi(12000))
console.log(taxi(20000))
console.log(taxi(70000))

// --------

function palaOnoPala(day) {
  // if (typeof day !== "number" || day > 7 || day <= 0) return `You must input the day as a number from 1 to 7!`; //Vago hasta para programar
  // if (day == 6 || day == 7) return `It's the weekend.`;
  // return `It is a business day.`;  

  //recien leo lo de nested switch 

  switch (Number(day)) { 
    case 6:
    case 7:
      return "finde";
    default:
      switch(day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          return "laburo";
        default: //y acá le meto un default si no entra en los de arriba, no contando otras cosas como un 9.
          return "Ingresa un numero solo del 1 al 7!"
      };
  };


}

console.log(palaOnoPala(1))
console.log(palaOnoPala(2))
console.log(palaOnoPala(6))
console.log(palaOnoPala(7))
console.log(palaOnoPala(8))
console.log(palaOnoPala("sdasd"))
console.log(palaOnoPala(1283))

// ---------

function personalInfo(name, lastName, age) {
  
  // let name = prompt("Enter your name!");
  // let lastName = prompt("Enter your last name!");
  // let age = Number(prompt("Enter your age!"));
  
  //aca usaria los parametros por prompt pero para probar voy a usar pasandoselos.

  if (name.length <= 0) console.error(`The name cannot be empty`);
  if (lastName.length <= 0) console.error(`The lastName cannot be empty`);
  if (age <= 0 || typeof age !== "number" || age == "NaN")  console.error(`Age is not a number or less than 1`);

  if(name.length >= 1 && lastName.length >= 1 && age > 0) {
    return {
      firstName: name,
      lastName: lastName,
      age: age
    }
  } 

}

console.log(personalInfo("Pedro", "Sanchez", "1"))
console.log(personalInfo("Pedro", "Sanchez", 34))
console.log(personalInfo("", "Sanchez", 12))
console.log(personalInfo("Pedro", "", 12))
console.log(personalInfo("Pedro", "Sanchez", "ljh"))

//no se por qué el undefined?


// ----------

function userName(param) {
  return `Hello, my name is ${param}`
}

function calculateAge(birthYear, currentYear) {
  return currentYear - birthYear;
}

function presentation() {
  Name = prompt("What's your name?");
  birthYear = prompt("What year were you brought onto this god forsaken world?");
  currentYear = prompt("Pssst... what year are we on? I forgot!")
  //podria revisar si los datos ingresados son correctos etc.
  return alert(`${userName(Name)} and I'm ${calculateAge(birthYear, currentYear)}!`)
}

presentation()










