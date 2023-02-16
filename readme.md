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

# 41. What is isNaN?

The isNan() function is used to determine whether a value is an illegal number (Not-a-Number) or not. i.e, This function returns true if the value equates to Nan. Otherwise it returns false.

```Javascript
isNan("Hello"); // true
isNan("100"); // false
typeof Nan; // Number
```

# 42. What are the pros and cons of promises over callbacks?

Below are the list of promises over callbacks,

## Pros:

- It avoids callbacks hell which is unreadable
- Easy to write sequential asynchronous code with .then()
- Easy to write parallel asynchronous code with Promise.all()
- Solves some of the common callbacks(call the callback too late, too early many times and swallow errosr/exceptions)

## Cons:

- It makes little comples code
- You need to load a polyfill if ES6 is not supported

# 43. What is the difference between an attribute and a property?

Attributes are defined on the HTML, markup whereas properties are defined on the DOM. For example, the below HTML element has 2 attributes type and value,

```Javascript
<input type="text" value="Name:">
```

You can retrieve the attrivute value as below,

```Javascript
const input = document.querySelector('input');
console.log(input.getAttribute('value')); //Good Morning
console.log(input.value); // Good Morning
And after you change the value of the text field to "Good Evening", it becomes like
console.log(inpit.getAttribute('value')); // Good morning
console.log(input.value); // Good Evening
```

# 43. What is th purpose of void(0)?

- The void(0) is used to prevent the page from refreshing.
- This will be helpful to eliminate the unwanted side-effect, because it will return the undefined primitive value.
- It is commonly used for HTML that uses href="Javascript:void(0);" withing an anchor(a) element.
- i.e, when you click a link, the browser loads a new page or refreshes the same page.
- But this behaviour will be prevented using the expression. For example, the below link notify the message without reloading the page

```Javascript
<a href="Javascript:void(0);" onclick="alert('Well Done!')">
 Click Me!
</a>
```

# 44. Is Javascript a compiled or interpreted language?

- Javascript is an interpreted language, not a compiled language.
- An interpreter in the browser reads over the Javascript code, interprets each line, and runs it.
- Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles Javascript to executable bytecode just as it about to run.

# 45. Is Javascript a case-sensitive language?

- Yes, Javascript is acase seinsitive language.
- The language keywords, variables, function & object names, and any other identifiers must always be typed with consistent capitalization of letters.

# 46. What is DOM?

The Browser Object Model (BOM) allows Javascript to "talk to" the browser. It consists of the objects navigator, history, screen, location and document which are children of window. The browser Object Model is not standardized and can change based on different browsers.

# 47. What is the use of setTimeout?

The setTimeout() method is used to call a function or evaluates an expressions after a specified number of milliseconds. For example, let us log a message after 2 seconds using setTimeout method,

```Javascript
setTimeout(function(){
  console.log("Heyy Zareel");
}, 2000);
```

# 48. What is the use of setInterval?

The setInterval() method is used to call a function or evaluates at specified intervals (in milliseconds). For example, let us log a message after 2 seconds setInterval method

```Javascript
setInterval(function() {
  console.log("Heyy")
}, 2000)
```

# 49. Why is Javascript treated as Single threaded?

JavaScript is a single-threaded language. Because the language specification does not allow the programmer to write code does not that the interpretercan can run parts of it parallel in multitple threads or processes. WHereas languages like java, go C++ can make multi-threaded and multi-process programs.

# 50. What is an event delegation?

Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it. For example, if you wanted to detect field changes in inside a specific form, you can use event delegation technique,

```Javascript
var form = document.querySelector("#registration-form");

// Listen for changes to fields inside the from
form.addEventListener(
  "input",
  function (event) {
  // Log the field that was changed
  console.log(event.target);
  },
  false
)
```

# 51. What is the puspose JSON stringify?

When sending data to a web server, the data has be in a string format. You can achieve this by converting JSON object into a string using

`strigify() method.`

```Javascript
var userJSON = { name: "Shon", age: 43};
var userString = JSON.stringify(user);
console.log(userString);
```

# 52. How do you parse JSON string?

When recieving the data from a web server, the data is always in a string format. But you can convert this string value to Javascript object using parse() method.

```Javascript
var userString = '{"name": "Prabir","age":25}';
var userJSON = JSON.parse(userString);
console.log(userJSON); // {name: "Prabir", age: 25}
```

# 53. What is the purpose of clearTimeout method?

The clearTimeout() function is used in Javascript to clear the timeout which has been set by setTimeout() function before that. i.e, The return value of setTimeout() function is stored in a variable and it's passed into the clearTimeout() function to clear the timer. For example, the below setTimeout method is used to display the message after 3 seconds. This timeout can be cleared by clearTimeout() method.

```Javascript
var msg;
function greeting() {
  alert("Heyy Prabir");
}
function start() {
  msg = setTimeout(greeting, 4000);
}
function stop() {
  clearTimeout(msg);
}
```

# 54. What is the purose of clearInterval method?

The clearInterval() function us used in javascript to clear the interval which has been set by setInterval() function.

```Javascript
var msg;
function greeting() {
  alert("Heyy Prabir");
}
function start() {
  msg = setInterval(greeting, 4000);
}
function stop() {
  clearInterval(msg);
}
```

# 55. How do you redirect new page in javascript?

In vanilla javascript, you can redirect to a new page using location property of window object. The syntax would be as follows,

```Javascript
function redirect() {
  window.location.href= "newPage.html";
}
```

# 56. How do you check whether a string contains a substring?

There are 3 possible ways to check whether a string contains a substring or not,

a.) Using includes: ES6 provided String.prototype.includes method to test a string contains a substring.

```Javascript
var mainString = "Shon",
subString = "Sh";
mainString.includes(subString);
```

b.) Using indexOf: In an ES5 or older environments, you can use String.prototype.indexOf which returns the index of subString. If the index value is not equal to -1 then it means the subString exist in the main string.

```Javascript
var mainString = "Shon",
subString = "Sh"
mainString.indexOf(subString) !=== -1;
```

c.) Using RegEx: The advanced solution is using Regular expression test method(RegExp.test), which allows for testing for against regular expressions

```Javascript
var mainString = "Shon";
regex = "./Sh/";
regex.test(mainString);
```

# 57. What are break and continue statements?

The break statement is used to "jumps out" of a loop and continues executing the code after the loop.

```Javascript
for (1 = 0; 1 < 10; i++) {
  if (i == 5) {
    break;
  }
  text += "Number:" + i + "<br>"
}
```

The continue statement is used to "jumps over" one direction in the loop. i.e, It breaks one iteration (in the loop), If a specified condition occurs, and continues with the next iteration in the loop.

```Javascript
for (i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  text += "Number:" + i + "<br>";
}
```

# 58. How do you define JSON arrays?

JSON arrays are written inside square brackets and array contain javascript objects. For example, the JSON array of users would be as below,

```Javascript
"users":[
  {"firstName":"Shon", "lastName":"Leo"},
  {"firstName":"Shine", "lastName":"Leo"},
  {"firstName":"Zareel", "lastName":"Kalam"},
]
```

# 59. How do you generate random integers?

You can use Math.random() with Math.floor() to return random integers, For example, If you want generate random integers between 1 to 10, the multiplication factor should be 10,

```Javascript
Math.floor(Math.random() * 10) + 1; // returns a random integer 1 to 10
Math.floor(Math.random() * 100) + 1; // returns a random integer 1 to 100
```

# 60. How do you change style of a HTML element in Javascript?

You can change inline style or classname of a HTML element using Javascript
Using style property: You can modify inline style using style property

```Javascript
document.getElementById("title").style.fontSize = "40px";
```

Using ClassName property: It is easy to modify element class using className property

```Javascript
document.getElementById("title").style.className = "custom-title";
```

# 61. What is a debugger statement?

- The debugger statement invokes any available debugging functionality, such as setting a breakpoint.
- If no debugging functionality is available, this statement has no effect,
- In the below function a debugger statement has been inserted.
- So execution is paused at the debugger statement just like a breakpoint in the script source.

```Javascript
function getProfile(){
  // code goes here
  debugger;
  // code goes here
}
```

# 62. What is the purpose of breakpoints in debugging?

- You can set breakpoints in the javascript code once the debugger statement is exeucted and debugger window pops up.
- At each breakpoint, javascript will stop executing, and let you examine the Javascript values.
- After examining values, you resume the execution of code using play button.

# 63. Whis is the purpose of breakpoints in debugging?

- You can set breakpoints in the javascript code once the debugger statement is executed and debugger window pops up.
- At each breakpoint, javascript will stop executing, and let you examinee the Javascript values.
- After examining values, you can resume the execution of code and play button.

# 64. Can I use reserved words as identifiers?

No, you cannot use the reserve words as variables, labels, object or function names.

```Javascript
var else = "hello"; // Uncaught SyntaxError: Unexpected token else
```

# 65. What is a conditional operator in javascript?

The conditional (ternary) operator is the only Javascript operator that takes three operands which acts as a shortcut for it statement.
var isAuthenticated = false;
console.log(isAuthenitcated ? 'Hello, welcome' : 'Sorry, you are not authenitcated');

# 65. Can you apply chaining on conditional operator?

Yes, you can apply chaining on conditional operator similar to if ... else if ... else if ... else chain. The syntax is going to be as below,

```Javascript
function traceValue(someParam) {
  return condition1
  ? value1
  ? condition2
  ? value2
  ? condition4
  ? value3
  ? value4
}

// The above conditional

function traceValue(someParam) {
  if(condition1){
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
```

# 66. What is the difference between proto and prototype?

- The **proto** object is the actual object that is used in the lookup chain to resolve methods etc.
- Whereas **prototype** is the object that is used to build **proto** when you create an object with **new**

# 67. How can you get the list of keys on any object?

- You can use Object.keys() method to get the keys of any objects

```Javascript
const user = {
  name: "Shon",
  gender: "male",
  age: 18,
};

console.log(object.keys(user)); //['name', 'gender', 'age']
```

# 68. How do you create an object with prototype?

- The Object.create() method is used to create a new object with the specified prototype object and properties.

```Javascript
const user = {
  name: "Shon",
  printInfo: fucntion (){
    console.log('My name is $(this.name).');
  },
},

const admin = Object.create(person);


admin.name = "Kalam"; // Remember that "name" is a property set on "admin" but not on "user" object
admin.printInfo(); // My name is Kumar
```

# 69. What is the difference between uneval and eval?

- The uneval function() returns the source of a given object;
- whereas the eval function evaluate that source code in a different memory area.

```Javascript
let msg = uneval(function greeting(){
  return "Hello, Shon Latheef";
});
let greeting = eval(msg);
greeting(); // returns "Hello, Prabir Kumar"
```

# 70. What is an anonymous function?

An anonymous function is a function without a name! Anonymous function are commonly assigned to a variable name or used as a callback function. The syntax would be as below,

```Javascript
function(optionalParameters) {
  // do something
}
const myFunction = function(){ // Anonymous function assigned to a variable
  // do something
};

[1, 2, 3].map(function(element){ // Anonymous function used as a callback function
  // do something
});

let x = function (a, b) {return a * b};
let z = x(2, 10);
console.log(z); // 20
```

# 71. What is the precedence order between local and global variables?

A local variable takes precedence over a global variable with the same name.

```Javascript
let msg = "Good morning";
function greeting(){
  msg = "Good Evening";
  console.log(msg);
}
greeting();
```

72. What are javascript accessors?

ECMAScript introduced javscript object accessors or computed properties through getters and setters. Getters uses get keywords whereas Setters uses set keyword.

```Javascript
let user = {
  firstName: "Prabir",
  lastName: "Kumar",
  language: "en",
  get lang() {
    return this.language;
  }
  set lang(lang){
    this.language = lang;
  }
};
console.log(user.lang); // getter access lang as en
user.lang = 'fr';
console.log(user.lang); // setter used to set lang as fr
```

# 73. What are the various statement in error landing?

Below are the list of statement used in an error handling.

- try: This statement is used to test a block of code for errors
- catch: This statement is used to handle the error
- throw: This statement is used to create custom errors.
- finally: This statement is used to execute code after try and catch regardless of the result.

# 74. Explain event delagation?

- Event delegation is a technique of adding event listeners to a parent element instead of adding them to the descendant elements.
- The listener will fire whenever the event is triggered on the descendant due to the event building up the DOM.
- The benefits of the technique are:
- Memory footprint goes down because only one single handler is needed on the parent element, rather than having to attach event handlers on each descendant.
- There is no need to unbind the handler from elements that are removed and to bind the event for new elements.

# 75. What is the difference between .call and .apply?

- Both call and apply are used to invoke functions and
- The first parameter will be used as the value of this with the function.
- However, .call takes in comma-separated arguments as the next arguments while apply and an array of arguments.
- An easy way to remember this is C for call and comma-separated and A for apply and an array of arguments.

```Javascript
funtion add(a + b){
  return a + b;
}

console.log(add.call(null, 3, 2)); // 5
console.log(add.apply(null, [3, 2])); // 5
```
