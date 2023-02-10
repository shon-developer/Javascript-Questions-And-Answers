# 1. List some features of javascript.

- Lightweight
- Interpreted programming language
- Complementary to Java
- Complementary to HTML
- Open source
- Cross-platform

# 2. Who developed Javascript, and what was the first name of Javascript.

Javascript was developed by Brendan Eich in 1995. The first name of Javascript was Mocha. Then it change to live script and later changed to Javascript.

# 3. List some the advantages of Javascript

`Some of the advantages of Javascript are:`

- Server interaction is less
- Feedback to the visitors is immediate
- Interactivity is high
- Interfaces are richer

# 4. List some of the disadvantages of Javascript.

`Some of the advantages of Javascript are:`

- No support for multithreading
- No support for multiprocessing
- Reading and writing of files is not allowed
- No support for networking applications.

# 5. What is Ecmascript?

Ecmascript is the Javascript standard intended to ensure the interoperability of web pages across different browsers. Inshort it is a language specification.

# 6. What is JSON ?

JSON (Javascript Object Notification) is a lightweight
format that is used for data interchanging. It is based on a subset of javascript language in the way Objects are built in Javascript.

# 7. What are the syntax rules of JSON?

Below are the list of syntax rules of JSON

- Tne data is in name/value pairs
- The data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays

# 8. Why do you need JSON?

When exchanging data between a browser and a server, the data can only be text. Since JSON is text only, It can easily be sent to and from a server, and used as a data fomrat by any programming language.

# 9. What are PWAs?

Progressive web Applications (PWAs) are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and Javascript. These PWAs are deployed to servers, accessible through URLs, and indeed by search engines.

# 10. What is V8 Javascript engine?

V8 is an open source high-performance Javascript engine
used by the Google Chrome Browser, Writter in C++. It is also being used in the node.js project.

# 11. What is JQUery?

jQuery is a popular cross-browser Javascript library that provides Document Object Model (DOM) traversal, event handling, animations and AJAX interactions by minimizing the descrepancies
across browsers. It is widely famous with its philosophy of "write less, do more".

`cross-browser testing is a type of non-functional testing that lets you know whether your website works as intended when accessed through`

`AJAX- Asynchronous Javascript and XML, used to communicate with the server without refreshing the webpage and thus increasing the user experience and better peformance`

# 12. What is the object type?

The object are a compound value where you can set properties that each hold their own values of any type. Objects are displayed in curly braces.

```javascript
const person = {
    firstname: "Shon";
    lastName: "Leo";
    eyeColor: "brown";
};

// There are two ways to access object values.

person.firstName;
person.lastName;
person.eyeColor;

person["firstName"];
person["lastName"];
person["brown"];
```

# 13. Explain arrays in Javascript

An array is a collection of data displayed in a square bracket, separated with commas.

```Javascript
let arr = ["shon", "shine", "zareel"];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(typeof arr); // output: object
```

# 14. What is typeof operator?

Javascript `typeof` operator tells you what datatype it is:

```Javascript
let name = "Shon";
console.log(typeof name);

let age = 18;
console.log(typeof age);

let val = true;
console.log(typeof val);

let num = null;
console.log(typeof num);

let cat;
console.log(typeof cat);
```

# 15. Explain equality in Javascript

Javascript has both strict and type-converting comparison:
Strict comparison (e.g., ===) checks for value equality and the datatypes Abstract comparison (e.g. ==) checks for value equality not datatypes.

```Javascript
var a = "90";
var b = 90;

a == b; // true
a === b; // false
```

==========================================================================================================================

# 16. What is Scope in Javascript?

Scope means from where the variable can be accessed.

- `function scope`: When a variable is declared inside a function, it is only accessible within that funtion and cannot be used outside that function.

```Javascript
function getName(){
    firstName = "shon";
    console.log(firstName);//can be accessed from here
}
console.log(firstName);//can't be accessed from here
getName();
```

- `block scope`: A variable when declared inside the if or swhich conditions or inside for or which loops, are accessible within that particular condition or loop.

```Javascript
function getName(){
    let name = "Shon";
    console.log(name);
    if(true){
    let name = "Shon";
    console.log(name);
    }
}
getName();
```

---

# 17. What are the types in Javascript

The following are built in data types available

- string
- number
- boolean
- null and undefined
- object
- symbol

---

# 18. Difference between let, var and const

- `var` variables can be updated and re-declared within its scope.
- `let` variables can be updated but not
  re-declared.
- `const` variables can neither be updated nor re-declared.

- `var` has Global Scope, function scope,
  block scope
- `let` has function scope, block scope
- `const` has function scope, block scope

---

# 19. What is the difference between == and ===?

Both are used to compare values.
=== checks the datatypes as well

```Javscript
1 == "1"; // true
1 == [1]; // true
1 == true; // true
0 == ""; // true
0 == "0"; // true
0 == false; // true
```

---

# 20.What's the difference between Host objects and Native Objects?

Native objects are objects that are part of the Javascript language defined by the ECMAScript specification, such as string, Math, Object, Function, etc.
Not objects are provided by the runtime environment (browser or Node), such as window.

==========================================================================================================================

# 21. What is difference between document.getElementById() and document.querySelector()?

- ## document.getElementById():

  Returns the element whose id matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access way to get access to a specific element quickly.

- ## document.querySelector():

  Returns the first element from the element if it matches the specified selector of a group of selectors

- ## document.querySelectorAll():
  Returns all elements that matchesthe specified selector;

# 22. What is a callback?

- A callback is a function passed as argument in author function

# 23. What is Higher Order Function(HOF)?

HOF is a function that take another function as parameter

```Javascript
let names = ["Shon", "Sharone", "Preksha"];
let message = names.forEach((name){
  console.log("Hi" + name);
})
```

# 24. When to use reduce(), map(), foreach() and filter() in Javascript?

- ## forEach():

It takes a callback function and run that callback function on each element of array one by one.

```Javascript
var arr = [10, 20, 30];

arr forEach(function(element, index){console.log(element + "comes at" + index)
});
```

output

```Javascript
Javascript
10 comes at 0
20 comes at 1
30 comes at 2
```

- ## filter():

filter() returns a new array with the elements that passes provided by a function.
Note: filter does not modify the orignal array.

```Javascript
var arr = [10, 20, 30];

var result = arr.filter(function{element}{
    return element !== 20;
});
console.log(result);
```

- ## map();

map() like filter() & forEach() takes a callback and run it against every element on the array but what makes it unique is it generate a new array based on your existing array.

```Javascript
let arr = [1, 2, 3, 4, 5];
let mapped = arr.map((element) => {
    return element * 10;
});
console.log(mapped);
```

- ## reduce():
  reduce() method of the array object is used to reduce the array to one single value.

```Javascript
var arr1 = [10, 20, 30];
var sum = arr.reduce(function(sum, element){
    return sum + element;
});
console.log(sum); // Output: 60
```

# 25. What is Hoisting in Javascript?

Hoisting is a Javascript mechanism where the declarate of variables and functions are moved to the top of their scope before the execution of the code.

Example 01: Variable Hoisting

```Javascript
console.log(message); // output : undefined

var message = "The variable Has been Hoisted";
```

Example 02: Function Hoisting

```Javascript
function hoist(){
  a = 20;
  var b = 100;
}

hoist();
console.log(a);
/*
Accessible as a global variable outside hoist() function
Output: 20
*/

console.log(b);
/*
Since It was declared, it is confined to the hoist() function scope.
We can't print It out outside the confines of the hoist() function.
Output: ReferenceError: b is not defined
*/
```

All declaration (function, var, let, const and class) are hoisted in Javascript, while the var declarations are initialized with undefined, but let and const declarations remain uninitialized.

```Javascript
console.log(a);
let a = 3;

// Output: ReferenceError: a is not defined
```

==========================================================================================================================

# 26. What are closures?

A closure is the combination of a function and the lexical environment within which that function was declared.

```Javascript
let outerFunction = () => {
  firstName = "Shon";
  let innerFunction = () => {
    console.log(firstName);
  };
  return innerFunction;
};
let result = outerFunction;
result();
```

Here, when the outerFunction() gets called, an execution of the outerFunction() comes up and it does its task and disappears from the callstack (memory) creating a reference of the innerFunction() in the memory, This reference is stored in the variable result. As it is a reference of a function, the result() becomes a function calling the innerFunction() which maintains a reference to its lexical environment, within the variable firstName exists. for this reason, when the result() is invoked, the variable firstName remains available for use, and "Shon" is passed to console.log even after the parent function has closed.

# 27. How do you clone an object in Javascript?

Using the object spread operator ..., the object that own enumarable properties can be copied into the new object. This creates a shallow clone a shallow clone of the object.

```Javascript
const obj = {a: 1, b: 2};
const shallowClone = {..obj};
```

# 28. What is an event flow?

Event flow is the order in which event is recieved on the web page, when you click an element that is nested in various other elements before your click actually reaches its destination, or target element, it must trigger the click event each of its parent elements first, starting at the top with the global window object.
There are two ways of event flow
Top to Bottom(Event Capturing)
Bottom to Top(Event Bubbling)

- Event Capturing Phase
- Target Phase
- Event Bubbling Phase

Event Capturing is the first to occur, where the events are intercepted if necessary.
This is followed by the event reaching the actual target
And the final Phase is bubbling when the ultimate response to the event takes place

# 29. What is prototype chain?

Nearly all objects in Javascript are instances of Object. That means all the objects in Javascript inherit the properties and methods from Object.prototype. This is called prototype chaining. Prototype chaining is used to build new types of objects based on existing ones. .

```Javascript
function Person(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
// Person class created
Person.prototype.getFullName = function(){
  return this.firstName + " " + this.lastName;
}

// we have added getFullName method in Person's prototype.
var person = new Person("Shon", "Latheef", 43);
// It will create an instance of the Person class
> person.hasOwnProperty("firstName") // true
> person.hasOwnProperty("getFullName") // false
> person.getFullProperty(); //Prabir Kumar
```

# 30. What is the difference between Call, Apply and Bind?

## Call();

The call() method invokes a function with a given `this` value and arguments provided one by one

```Javascript
var employee1 = {firstName: "Shine", lastName: "Latheef"};
var employee2 = {firstName: "Shon", lastName: "Leo"};

function greet {greeting1, greeting2} {
  console.log(
    greeting1 + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

greet.call(employee1, "Hello", "How are you"); // Hello Prabir Kumar, How are you?
greet.call(employee2, "Hello", "How are you"); // Hello Kumar P, How are you?
```

## Apply()

Invokes the function and allows you pass in arguments as an array

```Javascript
var employee1 = {firstName: "Prabir", lastName: "Kumar"};
var employee2 = {firstName: "Kumar", lastName: "P"};

function greet(greeting1, greeting2){
  console.log{
    greeting + " " + this firstName + " " + "," + greeting2
  };
}

greet.apply(employment1, ["Hello", "How are you?"]); // Hello Prabir Kumar, How are you?
greet.apply(employment2, ["Hello", "How are you?"]); // Hello Kumar P, How are you?
```

# 31. What is higher order function?

HOF is a function that take aanother function as paremeter

```Javascript
setTimeout(() => {})
```

# 32. What is a unary function?

Unary function (i.e. monadic) is a function that accepts exactly one argument.

```Javascript
const unaryFunction = (a) => console.log(a + 20);
```

# 33. What is carrying function?

Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

```Javascript
function volume(length){
  return function(width){
    return function (height){
      return height * width * length;
    };
  };
}

volume(2)(6)(3); // 36
```

Curried functions are great to improve code re-usability and functional composition.

# 34. What are the restrictions of web workers on DOM?

Web Workers do not have access to below javascript objects since they are defined in an external files
Window Object
Document Object
Parent Object

# 35. What is a promise?

Promises are used to handle asynchronous operations in Javascript. They provide an alternative approach for callbacks by reducing the callback hell the cleaner code.

`Promise object has four states`

- Pending - Initial state of promise. This state represents that the promise has neither been fulfilled nor been rejected, it is in pending state.

- Fulfilled - This state represents that the promise has been rejected for some reason, meaning the async operation has failed.

- Settled - This state represents that the promise has been either rejected or fulfilled.

```Javascript
const promise = new Promise(function(resolve, reject) {
  // promise description
});
```

# 36. What is a callback function?

A callback function is a function passed into another function as an argument.

```Javascript
setTimeout(() => ());
```

# 37. Why do we need callback?

The callbacks are needed because javascript is a evnt driven language. That means instead of waiting for a response javascript will keep executing while listening for other events.

Let us take an example with first function invoking an API call (simulated by setTimeout) and next function which logs the message

```Javascript
function firstFunction(){
 // Simulate a code delay
 setTimeout(function() {
   console.log("First function called");
 }, 1000);
}
function secondFunction(){
console.log("Second function called");
}
firstFunction();
secondFunction();

Output;
// Second function called
// First function called
```

An observed from the output, javascript did not wait for the response of first function and remaining code block get executed. So callbacks used in a way to make sure that certain code does not execute until other code finished execution.

# 38. What is a callback hell?

Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below.

`````Javascript
async1(function(){
  async2(function() {
    async3(function() {
      async4(function() {
        ````
      });
    });
  });
});
`````

# 39. What is promise chaining?

The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining.

```Javascript
new Promise(function(resolve, reject){
  setTimeout(() => resolve(1), 1000)
})
  .then(function(result){
    console.log(result); // 1
    return result * 2;
})
  .then(function(result){
  console.log(result); //2
  return result * 3;
})
  .then(function(result){
    console.log(result); // 6
});
```

In the above handlers, the result is passed to the chain of .them() handlers with the below work flow,

The initial promises in I second, after that. then handler is called by logging the result(1) and then return a promise with value of result \_2. After that the value passed to the next .then handler by logging the result(2) and return a promise with result \_3. Finally the value passed to the last. then handler by logging the result(6) and return a promise with resilt \* 4.

# 40. What is avail?

The avail() function evaluates Javascript code represented as a string can be a Javascript expression, variable, statement, or sequence of statements.

```Javascript
console.log(eval("3 + 2")); // 5
```
