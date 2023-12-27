console.log(`
-                 --Ez--                   -
`)

let myName = "Nicolas";

console.log(myName);

let myLastName = "Rodriguez";

console.log(myLastName);

let myAge = 21;

console.log(myAge);

let myPet = "Leo";

console.log(myPet);

let myPetAge = 5;

console.log(myPetAge);

let fullName = `${myName} ${myLastName}`;

console.log(fullName);

console.log(`-                 ----                   -`);

let presentationText = `${myName} ${myLastName} ${myAge} ${myPet} ${myPetAge} ${fullName}`; //Esto era? O que creemos un log/prompt presentandonos y rellenando con las variables?

presentationText = `Mi nombre es: ${myName}, mi apellido es: ${myLastName}, tengo: ${myAge} años, mi gato se llamaba: ${myPet}; tenía: ${myPetAge} años.
Mi nombre completo es: ${fullName}`;

console.log(presentationText);

console.log(`
-                 --Medium--                   -
`);

let sumAges = myAge + myPetAge;

console.log( `The sum of the ages ( ${myAge} + ${myPetAge} ) is equal to = ${sumAges}.`);

let substractAges = myAge - myPetAge;

console.log( `The substract of the ages ( ${myAge} - ${myPetAge} )is equal to = ${substractAges}.`);

let productAges = myAge * myPetAge;

console.log( `The product of the ages ( ${myAge} * ${myPetAge} ) is equal to = ${productAges}.`);

let divisionAges = myAge / myPetAge;

console.log( `The division of the ages ( ${myAge} / ${myPetAge} ) is equal to = ${divisionAges}.`);

console.log(`-                 ----                   -`);

let student = {
  nico1: "re capo1",
  nico2: "re capo2",
  nico3: "re capo3",
  nico4: "re capo4",
  nico5: "re capo5",
  nico6: { wannabe: "web Developer" }
};

console.table(student);

console.log(`-                 ----                   -`);

console.log(`Basicamente de ${myName[0]+myName[1]+myName[2]+myName[3]} se puede decir que es: 
|${student.nico1}|
|${student.nico2}|
|${student.nico3}| 
|${student.nico4}|
|${student.nico5}| 
( Both the student and of course the teacher!; The student tho, aspires to become a ${student.nico6.wannabe}!)`);

console.log(`-                 ----                   -`);

//I'm kinda lazy

let pet = {
  leo1: "gatuno1",
  leo2: "gatuno2",
  leo3: "gatuno3",
  leo4: "gatuno4",
  leo5: "gatuno5",
  leo6: {eraAmarillo: true}
};

console.table(pet);

console.log(`-                 ----                   -`);

console.log(`${pet.leo6.eraAmarillo}` && `Basicamente de ${myPet[0]+myPet[1]+myPet[2]} se puede decir que era: 
|${pet.leo1}|
|${pet.leo2}|
|${pet.leo3}|
|${pet.leo4}|
|${pet.leo5}|`);

console.log(`-                 ----                   -`);

let fruits = ["orange", "banana", "coconut", "kiwi", "tangerine"];

console.table(fruits);

console.log(`${fruits[0]} 
${fruits[1]}
${fruits[2]}
${fruits[3]}
${fruits[4]}`);

console.log(`
-                 --high--                   -
`);

let AmIAnAdult = prompt("Please, enter a number!") >= 18;

console.log(`I am an adult, right?: ${AmIAnAdult}`);

console.log(`-                 ----                   -`);

let numbers = [1, 231, 1378, 287956, 0121345467, 234234, 234234, 5674678, 68712, 34890267, 12859763, 1234978, 2390187, "107631", {amIAnElement: "I guess so, tho the array is called numbers"}];

console.log(`${numbers}

${numbers[0]}
${numbers[1]}
${numbers[2]}
${numbers[3]}
${numbers[4]}
${numbers[5]}
${numbers[6]}
${numbers[7]}
${numbers[8]}
${numbers[9]}
${numbers[10]}
${numbers[11]}
${numbers[12]}
${numbers[13]}
${numbers[14].amIAnElement}
`);

console.log(`
-                 ----                   -
`);

let family = [
  {pepe: {is: 18, likes: "pepsi", usuallyCodesOn: "Sunday"}},
  {mariano: {is: 43, likes: "cocacola", usuallyCodesOn: "Monday"}},
  {juan: {is: 99, likes: "chocolatada", usuallyCodesOn: "Saturday"}},
  {Hanako: {is: 67, likes: "Tachis", usuallyCodesOn: "Thursday"}},
  {Jaeger: {is: -1, likes: "something?", usuallyCodesOn: "Still unknown"}}
];

console.table(family);
console.log(`
-                 ----                   -
`);
console.table(family[0]);
console.table(family[1]);
console.table(family[2]);
console.table(family[3]);
console.table(family[4]);
console.log(`
-                 ----                   -
`);

let randomText = `${fruits[1]} ${numbers[3]} ${family[4].Jaeger.usuallyCodesOn}`; //Its first property is an Object, so I took the liberty to select a property within of my choice :P

console.log(randomText);

console.log(`-                 ----                   -`);
























