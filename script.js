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

function volume(length) {
  return function (width) {
    return function (height) {
      return height * width * length;
    };
  };
}
volume(2)(6)(3);

//? callback
/*
setTimeout(() => {});
*/

/*
let firstFunction = () => {
  setTimeout(() => {
    console.log("This is first");
  }, 2000);
};

let secondFunction = () => {
  console.log("This is second");
};

firstFunction();
secondFunction();
*/

//? callback hell
/*
async1(function () {
  async2(function () {
    async3(function () {
      async4(function () {

      });
    });
  });
});
*/

/*new Promise(function (resolve, reject) {
  setTimeout(resolve(1), 1000);
})

  .then(function (result) {
    console.log(result); // 2
    return result * 2;
  })

  .then(function (result) {
    console.log(result); // 3
    return result * 3;
  })

  .then(function (result) {
    console.log(result); // 4
    return result * 4;
  });
*/

//? eval
/*
console.log(eval("2 + 3"));
*/

//? isNan
/*
isNaN(hello);
console.log(isNAN());

isNaN(100);
console.log(isNAN());

console.log(typeof NaN);
*/

//? setInterval
/*
setInterval(() => {
  console.log("Hey Shon");
}, 2000);
*/

//? delegation technique
/*
let form = document.querySelector("#registration-form");

form.addEventListener(
  "input",
  (event) => {
    console.log(event.target);
  },
  false
);
*/
//? json stringify
/*
let userjson = { name: "zareel", age: 18 };
let userString = JSON.stringify(userjson);
console.log(userString);
*/

/*
var userString = '{"name": "Prabir","age":25}';
var userJSON = JSON.parse(userString);
console.log(userJSON); // {name: "Prabir", age: 25}
*/
//? clearTimeout
/*
let msg;
function greeting() {
  alert("Hey Shon");
}
function start() {
  msg = setTimeout(greeting, 4000);
}
function stop() {
  clearTimeout(msg);
}
*/
/*
function myFun() {
  console.log("Hello");
  return "World";
  console.log("Bye Bye");
}
myFun();
*/

//? clearInterval()
var msg;
function greeting() {
  alert("Hey Shon");
}

function start() {
  msg = setTimeout(greeting, 4000);
}

function stop() {
  clearInterval(msg);
}

//? redirect
/*
function redirect() {
  window.location.href = "newpage.html";
}
*/

//? how to check if a string contains a substring

//? includes() method
/*
let mainString = "Shon";
let substring = mainString.includes("Sh");
console.log(substring);
*/
/*
let mainString = "Shon";
let subString = "Sh";
console.log(mainString.includes(subString));
*/

//? indexOf
/*
let mainString = "Shon";
let subString = "Sh";
console.log(mainString.indexOf(subString) !== -1);
*/

//? regex
//! not working
/*
var mainString = "Shon";
regex = "./Sh/";
regex.test(mainString);
*/

//? break
/*
for (i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
*/

//? continue
/*
for (i = 1; i <= 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
*/

//? JSON array
/*
let jsonArray = [{ firstName: "Shon" }, { lastName: "Leo" }, { Age: 18 }];
*/

//? How will you generate random numbers between 1 to 10
/*
let random = Math.floor(Math.random() * 10 + 1);
console.log(random);
*/
/*
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
*/

//? Changing style of an element of an html element using javascript
// using style property
/*
document.getElementById("title").style.fontSize = "50px";
*/
// using className property
/*
document.getElementById("title").style.className = "custom title"
*/
//? debugger statement

function statement() {
  // code goes here
  debugger;
  // code goes here
}

//? ternary operators

let isAuthenticated = false;

console.log(
  isAuthenticated ? "Hello, welcome" : "Sorry, you are not authticated"
);
