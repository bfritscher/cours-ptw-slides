# <br>Zero to Hero

#### From blank page to deployed web application




# About you?




### What is your current *perception* of Web development?

Personal interest:

1. Web apps? It's **for junior developers and kids**, but real software engineers have better things to do.
2. Web apps? I am not a **graphics designer…** what am I doing here?
3. The Web is where some of the **most exciting technologies** are emerging.
4. When I grow up, I want to be a **front-end engineer**.




### What is your current *perception* of Web development?

Scope:

1. Web development is **purely about building user interfaces**. It's about HTML and CSS pages.
2. Web development is about building **complete applications**, including a user interface.
3. Is there **any kind of application** that does not rely on the Web, in one way or another? Mobile apps, interactive apps, business apps: all of this is built on the Web!




# Introduction




## The Web as an Application Platform




## Some Trends

SPA
Real-time
Tooling 

![](images/intro-adw.png)

Automated Development Workflows




## Languages, Platforms, Communities

Client

![](images/intro-html-css-js.png)

Server




## Languages, Platforms, Communities

others

or 

Server also JS




# Goals




# Planning




## Coding for the WEB

* **HTML** for content
* **CSS** for styling
* **JavaScript** for logic




## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>A RMScreenprint</title>
</head>
<body>
  <h1>Main heading in my document</h1>
  <p>Look Ma, I am coding <abbr title="Hyper Text Markup Language">HTML</abbr>.</p>
</body>
</html>
```

Elements
<div>
<a>
<input>
<img>
strong

block inline


Attributes
name value

comments
<!-- This is comment text -->

<div id="welcome-text">Welcome!</div>
<div class="container">
    <button class="button button-red" id="cancel">No</button>
    <button class="button button-blue" id="accept">Yes</button>
    <button class="button button-yellow" id="not-sure">Maybe</button>
</div>

Ids and classes are used by css and javascript to reference specific indvidual or groups of elements.



http://jsbin.com/bokize/1/edit



http://hack.rice.edu/webdev/#/

https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Introduction

http://www.simplehtmlguide.com/cheatsheet.php

http://codingdomain.com/webdevelopment/css/crash-course/

http://css.sutterlity.fr/les-bases-css/introduction-au-css/

https://developer.mozilla.org/fr/docs/Web/HTML/Element
https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs
https://developer.mozilla.org/fr/docs/Web/CSS/Reference
http://css.sutterlity.fr/
http://caniuse.com/

http://tympanus.net/codrops/css_reference/




## CSS

body {width: 500px;}
.tag-class {
    padding: 20px 40px;
    width: auto;
}
#tag-id {
    height: 100px;
    float: left;
}
Notice that "#" delimites an id and "." a class.


cascading

box-model

media queries




## TASK1

Show your HTML/CSS skill by creating a webpage monCV
with the following elements




## Debriefing

Démarche choisie
Problème rencontrées
d/l fichier
Editeur,
serveur
reload




# Framework CSS

Presentation framework libraries css + JS 
Bootstrap
http://getbootstrap.com/




# Tooling

online editors





## 
CSS pre-processor: Less, Sass with Ruby and Node, Stylus, none
JS preprocessor: CoffeeScript, TypeScript, ECMAScript 6 (Traceur and Babel), none
HTML preprocessor: Jade, Haml, Handlebars, none
TODO Script loader: Require, Webpack, none
TODO Test framework: Jasmine, Mocha, Qunit




### Yeoman

Yeoman is a combination of tools, which allows to you to setup a complete,
automated, efficient and reliable development workflow.

**Yo** is a tool for generating project skeletons (scaffolding). You can create and
share your skeletons. Yo generators are npm modules and you can find one
for most popular web frameworks.

**Bower** is a tool for managing “web dependencies”. Not only javascript
modules, but also CSS files, images, etc.

**Grunt** is a task runner. It is the tool that drives your automated process, by
executing a series of tasks. There are lots of grunt plugins provided by the
community for all aspects of your project.


http://yeoman.io/
http://yeoman.io/learning/
http://bower.io/
http://gruntjs.com/


# node.js &  npm

not use node js for backend only for dev environnement

https://nodejs.org/
https://www.npmjs.com/




# Lab01: MonCV

```sh
$ npm install -g yo bower grunt-cli
```

```sh
$ npm install -g generator-webapp
```
https://github.com/yeoman/generator-webapp

```sh
$ mkdir my-yo-project
$ cd my-yo-project
```

```sh
$ yo webapp
```

bower install & npm install

package.json
bower.json

edit with livereload

bower install bootswatch --save
https://bootswatch.com/




# TASK 2 update your CV




## Add some interaction JavaScript/jQuery

https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics

http://sutterlity.gitbooks.io/apprendre-jquery/content/rappel_javascript.html




### jQuery

jQuery is a **fast, small**, and feature-rich JavaScript
library. It makes things like HTML **document traversal** 
and **manipulation, event handling, animation**, 
and **Ajax** much simpler with an easy-touse
API that works **across a multitude of browsers**.




### jQuery selecting

**Selecting Elements by ID**

```javascript
$('#myId'); // IDs must be unique per page.
```

**Selecting Elements by Class Name**

```javascript
$('.myClass');
```

**Selecting Elements by Attributes**

```javascript
$('input[name="first_name"]'); // this can be very slow in older browsers
```

**Selecting Elements by Compound CSS Selector**

```javascript
$('#myId ul.people li');
```





bower install jquery-smooth-scroll

--> auto ajouté (rev-dep)

```javascript
$('a').smoothScroll();
```

--> jquery why 
--> jshint..

```javascript
$(document).ready(function(){
  'use strict';
  
});
```


## dev tools dom + console

 using console /dev tools dom inspector


# ex..

Problème gestion de version
commenter des vieux bouts de code...
-> gestion version




# what is git



http://rogerdudler.github.io/git-guide/

http://git-scm.com/book/en/v2/Getting-Started-About-Version-Control

http://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository

http://onlywei.github.io/explain-git-with-d3/#freeplay

http://marklodato.github.io/visual-git-guide/index-fr.html

http://pcottle.github.io/learnGitBranching/

git init
git add 
git commit
git push origin 
.gitignore



# markdown




# deploy to github pages

git remote add origin git@github.com:bfritscher/test-lab.git
git push origin master:gh-pages --set-upstream

http://bfritscher.github.io/test-lab/

change template? redo



grunt
grunt serve:dist

CNAME?




# JavaScript




### What is your current perception of JavaScript?

Scope:

1. It's a "toy" language for creating animations on web pages, but I would not use it for anything "serious".
2. It's a very powerful language. It is essential on the client side, but it is also really interesting on the server side.




### What is your current perception of JavaScript?

Personal taste:

1. I hate it.
2. I am not a big fan.
3. It's kind of interesting.
4. I love it.
5. I don't care.





### What is your current perception of JavaScript?

Relationship to Java:

1. It's Java, with a few syntactic differences.
2. It has nothing to do with Java, except for some common syntax.




### What is your current perception of JavaScript?

Current knowledge:

* **Novice:** I may have hacked a few scripts on web pages, but mostly by copy-pasting examples and without fully understanding the language (what is a prototype?).
* **Intermediate:** I have used JavaScript quite a bit. I can describe the object-oriented model, I understand what a constructor is and how it works. I have quite a bit of experience with JQuery and other libraries. I am always working with a debugger.
* **Expert:** closures and modules have no secret for me, I have read "JavaScript: the good parts". I have designed my development workflow with yeoman, grunt, bower and a few other tools. I know who Paul Irish is.

<!-- .element: class="small" -->




Douglas Crockford: JavaScript: The Good Parts
https://www.youtube.com/watch?v=_DKkVvOt6dk




# JavaScript

![](images/book-javascript-the-good-parts.jpg)
<!-- .element: class="w-40" -->

<!-- .element: class="center" -->

### JavaScript is built on some very good ideas and a few very bad ones.

* Language of the web browser
* One of the most popular programming languages
* One of the most despised programming languages
* It is possible to get work done with it without knowing much about the language
* Programming is difficult business. It should never be undertaken in ignorance.



**JavaScript is an important language** because it is
the language of the web browser. Its association with
the browser makes it one of the most popular
programming languages in the world. **At the same
time, it is one of the most despised programming
languages in the world**. [...]

<!-- .element: class="small" -->

Most people in that situation **don’t even bother to
learn JavaScript first**, and then they are surprised
when JavaScript turns out to have significant
differences from the some other language they would
rather be using, and that those differences matter.

<!-- .element: class="small" -->

The amazing thing about JavaScript is that it is possible
to get work done with it without knowing much about
the language, or even knowing much about
programming. It is a language with enormous
expressive power. It is even better when you know what
you’re doing. **Programming is difficult business. It
should never be undertaken in ignorance.**

<!-- .element: class="small" -->

JavaScript: The Goods Parts -- Douglas Crockford




## JavaScript 101 (Part 1)

* Types
* Scopes
* Objects
* Prototypal inheritance
* Functions
* Constructors
* Arrays




### Types

JavaScript defines **6 types**:

* number
* boolean
* string
* object
* undefined
* null

<!-- .element: class="w-40 float-left" -->

```javascript
var aNumber = 3.12;
var aBoolean = true;
var aString = 'John Smith';
var anObject = { aProperty: null };
typeof aNumber === 'number';
typeof aBoolean === 'boolean';
typeof aString === 'string';
typeof anObject === 'object';
typeof anObject.aProperty === 'object';
typeof anObject.foobar === 'undefined';
// null is a type but
typeof null === 'object';
```
<!-- .element: class="w-50 float-left" -->

JavaScript is a dynamic language: when you declare a variable, you don't specify a type (and the type can change over time).
<!-- .element: class="small clear" -->




### Scopes

There are 2 scopes for variables:

* the (evil) global scope
* the function scope

A variable declared within a
function is **not accessible**
outside this function.<br/><br/>
Unless using **strict mode**, it
is not mandatory to declare
variables (beware of typos…)<br/><br/>
Two scripts loaded from the
same HTML page share the
same global scope (beware of
**conflicts**…)<br/><br/>
There is **no block scope**.

<!-- .element: class="w-40 float-right smaller" -->

```javascript
var aVariableInGlobalScope;

function myFunction() {
  var aVariableInFunctionScope;
  anotherVariableInGlobalScope;
}

function myFunction2() {
  //no block scope!
  for(i=0; i<10; i++){
    //i is in global scope!
  }
  for(var j=0; j<10; j++){
    //j is in function scope!
  }
}
```
<!-- .element: class="w-50 float-left" -->



### Exploring scopes

```javascript
var aGlobalVar = 'hello';
var anotherGlobalVar = 'world';
function myFunction() {
    aGlobalVar = 'yo';
    var anotherGlobalVar = 'yeep';
    var localVar = 'local';
    iAmNotALocalVariable = 'iAmGlobal';
}
console.log('1. aGlobalVar: ' + aGlobalVar);
console.log('2. anotherGlobalVar: ' + anotherGlobalVar);

myFunction();
console.log('3. aGlobalVar: ' + aGlobalVar);
console.log('4. anotherGlobalVar: ' + anotherGlobalVar);
console.log('5. iAmNotALocalVariable: ' + iAmNotALocalVariable);
console.log('6. localVar: ' + localVar);
```
<!-- .element: class="jsbin-embed" data-href="http://jsbin.com/toluqe/1/edit?js,console" data-height="500px" -->




### Objects are dynamic bags of properties

There are different ways to
**access properties** of an
object.<br/><br/>
JavaScript is **dynamic**: it is
possible to **add** and **remove**
properties to an object at any
time.<br/><br/>
Every object has a different list
of properties (**no class**).

<!-- .element: class="w-40 float-right small" -->

```javascript
// create an object
var person = {
    firstName: 'John',
    lastName: 'Smith'
};

// dynamically add properties
person.gender = 'male';
person['zip'] = 2000;

// remove a property
delete person.zip;

// check existence of a property
person.hasOwnProperty('gender');

// enumerate properties
for (var key in person) {
    console.log(key + ' : ' + person[key]);
}
```
<!-- .element: class="w-50 float-left" -->



### Exploring objects

```javascript
// create an object
var person = {
    firstName: 'John',
    lastName: 'Smith'
};

// dynamically add properties
person.gender = 'male';
person['zip'] = 2000;

// remove a property
delete person.zip;

// check existence of a property
person.hasOwnProperty('gender');

// enumerate properties
for (var key in person) {
    console.log(key + ' : ' + person[key]);
}
```
<!-- .element: class="jsbin-embed nodpf" data-href="http://jsbin.com/yecuxe/2/edit?js,console" data-height="500px" -->




### Creating objects

JavaScript has **no support for classes** (before ES6)

There are 3 ways to create objects:

**`class`** is a reserved word in
JavaScript, but it is not used
in the current version of the
language (reserved for the
future ES6).<br/><br/>
A **constructor** is function like
any other (capitalized is a
coding convention).<br/><br/>
It is the use of the **new**
keyword that triggers the
object creation process.

<!-- .element: class="w-40 float-right smaller" -->

```javascript
//create an object with a literal
var person = {
  firstName: 'John',
  lastName: 'Smith'
};

// create an object with a prototype
var child = Object.create(person);

// create an object with a constructor
var child = new Person('John', 'Smith');
```
<!-- .element: class="w-50 float-left" -->




### Every object inherits from a prototype object

```javascript
var person = {
    firstName: 'John',
    lastName: 'Smith'
};
// person's prototype is Object.prototype

var father = {};
var child = Object.create(father);
// child's prototype is father


function Person(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
}
var john = new Person('John', 'Doe');
// john's prototype is Person.prototype
```



```javascript
var person = {
    firstName: 'John',
    lastName: 'Smith'
};
// person's prototype is Object.prototype
console.log(Object.getPrototypeOf(person) === Object.prototype);

var father = {};
var child = Object.create(father);
// child's prototype is father
console.log(Object.getPrototypeOf(child) === father);

function Person(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
}
var john = new Person('John', 'Doe');
// john's prototype is Person.prototype
console.log(Object.getPrototypeOf(john) === Person.prototype);
```
<!-- .element: class="jsbin-embed nodpf" data-href="http://jsbin.com/mevuja/1/edit?js,console" data-height="500px" -->




### Every object inherits from a prototype object

<!-- TODO: maybe drawing -->

Every object inherits from a prototype object.
**It inherits and can override its properties**, including its methods.

Objects created with object literals inherit from **Object.prototype**.

When you access the property of an object,
JavaScript **looks up the prototype chain**
until it finds an ancestor that has a value for
this property.




### Class-like data structure

**badGreet** is a property that
will be replicated for every
object created with the
Person constructor:<br/>
 - poor memory management<br/>
 - not possible to alter
behavior of all instances at
once<br/><br/>
**greet** is a property that will
be shared by all instances
(because it will be looked up
along the object inheritance
chain).<br/><br/>
**privateVar** is not accessible
outside of the constructor.<br/><br/>
**fistName** is publicly accessible (no encapsulation).

<!-- .element: class="w-40 float-right smaller" -->

```javascript
function Person(fn, ln) {
    var privateVar;
    this.firstName = fn;
    this.lastName = ln;
    this.badGreet = function () {
      console.log('Hi ' + this.firstName);
    };
}

Person.prototype.greet = function () {
    console.log('Hey ' + this.firstName);
};

var p1 = new Person('John', 'Smith');

p1.badGreet();
p1.greet();
```
<!-- .element: class="w-50 float-left" -->



### Exploring function constructor

```javascript
function Person(fn, ln) {
    var privateVar;
    this.firstName = fn;
    this.lastName = ln;
    this.badGreet = function () {
      console.log('Hi ' + this.firstName);
    };
}

Person.prototype.greet = function () {
    console.log('Hey ' + this.firstName);
};

var p1 = new Person('John', 'Smith');

p1.badGreet();
p1.greet();
```
<!-- .element: class="jsbin-embed nodpf" data-href="http://jsbin.com/zezeya/1/edit?js,console" data-height="500px" -->




### Arrays are objects

```javascript
var fruits = ['apple', 'pear'];
console.log(Object.getPrototypeOf(fruits)); //[]
console.log(typeof fruits); //object

// add elements to an array
fruits.push('banana');

// check if an array contains an element
var inArray = fruits.indexOf('banana') > -1;

// remove 1 element from array
var removed = fruits.splice(fruits.indexOf('pear'), 1);

//iterate over an array
for (var i = 0; i < fruits.length; i++) {
    console.log('fruits[' + i + '] = ' + fruits[i]);
}
```
<!-- .element: class="jsbin-embed nodpf" data-href="http://jsbin.com/qakame/1/edit?js,console" data-height="500px" -->



### Arrays the functional way

```javascript
var fruits = ['abricot', 'ananas', 'strawberry', 'orange'];

var transformedFruits = fruits.map(function (fruit) {
    return fruit.toUpperCase();
});

transformedFruits.forEach(function (fruit) {
    console.log(fruit);
});

var count = fruits.reduce(function (val, fruit) {
    console.log('reducer invoked with ' + val);
    return val + 1;
}, 0);
console.log('There are ' + count + ' fruits in the array');

var aFruits = fruits.filter(function (fruit) {
    return fruit.charAt(0) === 'a';
});
aFruits.forEach(function (fruit) {
    console.log(fruit);
});
```
<!-- .element: class="jsbin-embed nodpf" data-href="http://jsbin.com/zumaci/1/edit?js,console" data-height="500px" -->



# task JS

 bower install Chart.js --save
  some jQuery
 build a progressbar replacement as chart.

 
 


# JavaScript 101 (part 2)

* Functions are objects
* Closures
* Module patterns
* this




### Functions are objects

```javascript
function aFunc(){ return true; } // no semicolon

// anonymous function
var f = function(i){ return i; }; // semicolon since assignment

var g = function g(i){
  if(i > 100){
    return i;
  }
  return g(i+1); // recursive call
};
var h = function(aFunctionObj){
  // 3 ways to call a function
  console.log(aFunctionObj(0));
  console.log(aFunctionObj.apply(this, [0]));
  console.log(aFunctionObj.call(this, 0));
};

h(f);
h(g);
```
http://jsbin.com/qonahi/1/edit




### Functions can be nested

An **object** is created for every function.

Each function has access to variables defined in the **parent** functions (an in the **global scope**).

```javascript
function f1(p1){
  console.log('f1 can see ' + p1);
  function f2(p2){
    console.log('f2 can see ' + p2 + ' ' + p1);
    function f3(p3){
      console.log('f3 can see ' + p3 + ' ' + p2 + ' ' + p1);
    }
    f3(3);
  }
  f2(2);
}
f1(1);
```




### Closures

A closure is formed when a nested function accesses a **free variable**

<!-- .element: class="w-40" -->

* In a function, a **free variable** is a variable that is neither a local variable, nor a parameter of the function.
* A **closure** is the combination of a code block (the function code) and saved parent scopes.

<!-- .element: class="small" -->


```javascript
function f1(p1){
  console.log('f1 can see ' + p1);
  function f2(p2){
    console.log('f2 can see ' + p2 + ' ' + p1);
    function f3(p3){
      console.log('f3 can see ' + p3 + ' ' + p2 + ' ' + p1);
    }
    f3(3);
  }
  f2(2);
}
f1(1);
```

![](images/closure.png)
<!-- .element: class="top right" -->




### Module patterns

Patterns are applied to create modules

When `privateFunction1` accesses `aPrivateVar`, a **closure** is formed.<br/><br/>
`privateFunction1` is **available even after** the immediately invoked function has returned.<br/><br/>
`privateFunction1` and `privateFunction2` share the same parent scope.

<!-- .element: class="w-33 float-right smaller" -->

```javascript
var myModule = (function(){

    var aPrivateVar = 'World';
    var privateFunction1 = function(){
        console.log('Hello ' + aPrivateVar);
    };
    var privateFunction2 = function(){};
    
    // Make some elements public
    return {
      publicFunction: privateFunction1
    };
})(); // The function is immediately invoked

myModule.publicFunction();
```
<!-- .element: class="w-66 float-left" -->

![](images/module.png)
<!-- .element: class="top right" -->




### this

* How the function is called: determines the `this` value
* It is dynamic, which means the value could change
* You can change the `this` context through `.call()`, `.apply()` and `.bind()`

```javascript
// let's assume .elem is <div class="elem"></div>
var element = document.querySelector('.elem');

// our function
var someFunc = function () {
  console.log(this);
};

// when clicked, `this` will become the element
element.addEventListener('click', someFunc); // <div>

// if we just invoke the function, `this` becomes the window object
someFunc(); // [object Window]
```




### Saving this scope

```javascript
var obj = {};
obj.myMethod = function () {
  console.log(this); // this = obj
    setTimeout(function () {
        console.log(this); // window object :O!!!
    }, 100);
};
obj.myMethod();
```

```javascript
var obj = {};
obj.myMethod = function () {

  var that = this; //saving this scope
  
  console.log(this); // this = obj
    setTimeout(function () {
        console.log(that); // that (this) = obj
    }, 100);
};
obj.myMethod();
```

http://toddmotto.com/understanding-the-this-keyword-in-javascript/

<!-- .element: class="credits" -->




# javascript lab?

debugging
ide setup

Browsers and Developers Tools
https://developer.chrome.com/devtools

JSLint capabilities

https://developer.mozilla.org/fr/docs/Web/JavaScript/Une_r%C3%A9introduction_%C3%A0_JavaScript

https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide


