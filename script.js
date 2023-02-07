//? objects

// const obj = {
//   name: "Shon",
//   favoriteAnimal: "bunny rabbit",
//   age: 18,
// };
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.favoriteAnimal);

// console.log(obj["name"]);
// console.log(obj["age"]);
// console.log(obj["favoriteAnimal"]);

//? arrays
/*
let arr = ["shon", "shine", "zareel"];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(typeof arr);
*/

//? typeof operator

// let name = "Shon";
// console.log(typeof name);

// let age = 18;
// console.log(typeof age);

// let val = true;
// console.log(typeof val);

// let num = null;
// console.log(typeof num);

// let cat;
// console.log(typeof cat);

// ? comparison operator: -there are strict comparison (===) and abstract comparison (==)
/*
function getName() {
  firstName = "Shon";
  console.log(firstName);
}
console.log(object);
getName();
function scope: variable declared inside the function cannot be used outside the function scope.
*/

/*
function getName() {
  let firstName = "Shon";
  console.log(firstName);
  if (true) {
    console.log("This is block scope");
  }
}
getName();
*/

//? Block scope a variable declared inside if or switch conditions or for white loops can be?
//? accessible within the conditions of loops

//? Closure
/*
let outerFunction = () => {
  let firstName = "Shon";
  let innerFunction = () => {
    console.log(firstName);
  };
  return innerFunction;
};
let result = outerFunction();
result();
*/

//? ...spread operator
/*
let obj = { a: 1, b: 2, c: 3 };
let shadowobj = { ...obj };
console.log(shadowobj);
*/

//? prototype chaining

/* function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.getFullName() = function(){
  return this.firstName + " " + this.lastName
}
*/

/*
var person = new Person("Shon", "Leo", 18);
console.log(Person);

person.hasOwnProperty("firstName");
person.hasOwnProperty("getFullName");
person.getFullName();
*/

//? Call()
/*
let employee1 = { firstName: "Shine", lastName: "Latheef" };
let employee2 = { firstName: "Shon", lastName: "Leo" };

function greet(greeting1, greeting2) {
  console.log(greeting1 + " " + this.firstName + " " + this.lastName);
}
greet.call(employee1, "hello how are you?");
greet.call(employee2, "hello how are you?");
*/
//? Bind():

/*
let employee1 = { firstName: "Shine", lastName: "Latheef" };
let employee2 = { firstName: "Shon", lastName: "Leo" };

function greet(greeting1, greeting2) {
  console.log(greeting1 + " " + this.firstName + " " + this.lastName);
}

var first = greet.bind(employee1);
var second = greet.bind(employee2);

first("hello");
second("hello");
*/

//? Apply()
let employee1 = { firstName: "Shine", lastName: "Latheef" };
let employee2 = { firstName: "Shon", lastName: "Leo" };
