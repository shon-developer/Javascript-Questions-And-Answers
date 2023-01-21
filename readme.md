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

# 12. What is the object type?

The object type refers to a compound value where you can set propertised (named locations) that each hold their own values of any type.

```javascript
var obj = {
  a: "hello Zareel", // property
  b: 20,
  c: true,
};
obj.a; // "hello Zareel", accessed with doted notation
obj.b; // 20
obj.c; // true

obj["a"]; // "hello Zareel", accessed with bracket notation
obj["b"]; // 20
obj["c"]; // true
```

# 13. Explain arrays in Javascript

An array is a collection of data displayed in a square bracket, separated with commas.

```Javascript
var arr = ["hello Prabir", 22, true];
arr[0]; // "hello Prabir"
arr[1]; // 22
arr[2]; // true
arr.length; // 3

typeof arr; // "object"
```

# 14. What is typeof operator?

Javascript provides is a typeof operator that can examine a value and tell you what type it is:

```Javascript
var a;
typeof a; // "undefined"

a = 42;
typeof a; // "number"

a = true;
typeof a; // "boolean"

a = null;
typeof a; // "object" -- wierd, bug

a = undefined;
typeof a; // "undefined"

a = {b: "c"};
typeof a; // "object"
```

# 15. Explain equality in Javascript

Javascript has both strict and type-converting comparison:
Strict comparison (e.g., ===) checks for value equality and the datatypes Abstract comparison (e.g. ===) checks for value equality not datatypes

```Javascript
var a = "90";
var b = 90;

a == b; // true
a === b; // false
```

========================================================
