# <br>Zero to Hero

De la page blanche au deployment d'une application web en 45h




What is your current perception of Web development?
• Personal interest
• Web apps? It's for junior developers and kids, but real
software engineers have better things to do.
• Web apps? I am not a graphics designer… what am I
doing here?
• The Web is where some of the most exciting
technologies are emerging.
• When I grow up, I want to be a front-end engineer.

What is your current perception of Web development?
• Scope
• Web development is purely about building user
interfaces. It's about HTML and CSS pages.
• Web development is about building complete
applications, including a user interface.
• Is there any kind of application that does not rely on
the Web, in one way or another? Mobile apps,
interactive apps, business apps: all of this is built on the
Web!


# Intro

The Web as an Application Platform

Some Trends

SPA
Real-time
Tooling

Languages, Platforms, Communities

Client
Server

Server also JS


# But final Demo


http://bower.io/
http://gruntjs.com/
# Chemin




# Rappel

## HTML / CSS

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

paper proto

own proto



## Debriefing

Démarche choisie
Problème rencontrées
Editeur, serveur?


# Framework CSS

Bootstrap
http://getbootstrap.com/


media queries


# Lab01: MonCV

https://nodejs.org/
https://www.npmjs.com/
http://yeoman.io/
http://yeoman.io/learning/

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

how: javascript remove from a array

grunt
grunt serve:dist

## javascript

https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics

http://sutterlity.gitbooks.io/apprendre-jquery/content/rappel_javascript.html
## jQuery

## dev tools dom + console

 bower install Chart.js --save
 
 using console /dev tools dom inspector

 some jQuery
 build a progressbar replacement as chart.

# what is git

.gitignore

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
git remote add origin git@github.com:bfritscher/test-lab.git
git push origin master:gh-pages --set-upstream



http://bfritscher.github.io/test-lab/

change template? redo

#deploy to github pages

CNAME?

#markdown

# javascript lab?
debugging
ide setup


# JavaScript

Douglas Crockford: JavaScript: The Good Parts
https://www.youtube.com/watch?v=_DKkVvOt6dk

• What is your current perception of JavaScript?
• Scope
• It's a "toy" language for creating animations on web
pages, but I would not use it for anything "serious".
• It's a very powerful language. It is essential on the
client side, but it is also really interesting on the server
side.

• What is your current perception of JavaScript?
• Personal taste
• I hate it.
• I am not a big fan.
• It's kind of interesting.
• I love it.
• I don't care.

• What is your current perception of JavaScript?
• Relationship to Java
• It's Java, with a few syntactic differences.
• It has nothing to do with Java, except for some
common syntax.


What is your current perception of JavaScript?
• Current knowledge
• Novice: I may have hacked a few scripts on web pages, but mostly by
copy-pasting examples and without fully understanding the language
(what is a prototype?).
• Intermediate: I have used JavaScript quite a bit. I can describe the
object-oriented model, I understand what a constructor is and how it
works. I have quite a bit of experience with JQuery and other libraries. I am
always working with a debugger.
• Expert: closures and modules have no secret for me, I have read
"JavaScript: the good parts". I have designed my development workflow
with yeoman, grunt, bower and a few other tools. I know who Paul Irish is.

How long to make lab?


http://mediaunmasked.com/reviews/software/codepen-jsfiddle-cssdeck-liveweave-jsbin-dabblet/

http://codepen.io/

Browsers and Developers Tools
https://developer.chrome.com/devtools

JSLint capabilities


JavaScript 101

JavaScript is built on some very
good ideas and a few very bad
ones.
!
JavaScript is an important language because it is
the language of the web browser. Its association with
the browser makes it one of the most popular
programming languages in the world. At the same
time, it is one of the most despised programming
languages in the world. […]
!
Most people in that situation don’t even bother to
learn JavaScript first, and then they are surprised
when JavaScript turns out to have significant
differences from the some other language they would
rather be using, and that those differences matter.
!
The amazing thing about JavaScript is that it is possible
to get work done with it without knowing much about
the language, or even knowing much about
programming. It is a language with enormous
expressive power. It is even better when you know what
you’re doing. Programming is difficult business. It
should never be undertaken in ignorance.

-- The Goods Parts



• Types
• Scopes
• Objects
• Prototypal inheritance
• Functions
• Constructors
• Arrays

Rule #1
JavaScript defines 6 types

```javascript
var aNumber = 3.12;
var aBoolean = true;
var aString = 'HEIG-VD';
var anObject = { aProperty: null };
var t;
t = typeof aNumber === 'number';
t = typeof aBoolean === 'boolean';
t = typeof aString === 'string';
t = typeof anObject === 'object';
t = typeof anObject.aProperty === 'object';
t = typeof anObject.foobar === 'undefined';
```

• The 6 types are:
• number
• boolean
• string
• object
• undefined
• null
• null is a type, but typeof
null
===
object.
• JavaScript is a dynamic
language: when you declare a
variable, you don't specify a
type (and the type can
change over time).


Rule #2
There are 2 scopes for variables:
the (evil) global scope and the function scope

A variable declared within a
function is not accessible
outside this function.
• Unless using strict mode, it
is not mandatory to declare
variables (beware of typos…)
• Two scripts loaded from the
same HTML page share the
same global scope (beware of
conflicts…).
• There is no block scope.

```javascript
var aGlobalVar = 'hello';
var anotherGlobalVar = 'world';
function myFunction() {
    aGlobalVar = 'yo';
    var anotherGlobalVar = 'yeep';
    iAmNotALocalVariable = 'iAmGlobal';
}
console.log('1. aGlobalVar: ' + aGlobalVar);
console.log('2. anotherGlobalVar: ' + anotherGlobalVar);
myFunction();
console.log('3. aGlobalVar: ' + aGlobalVar);
console.log('4. anotherGlobalVar: ' + anotherGlobalVar);
```


Rule #3
Objects are dynamic bags of properties
• There are different ways to
access properties of an
object.
• JavaScript is dynamic: it is
possible to add and remove
properties to an object at any
time.
• Every object has a different list
of properties (no class).

```javascript
var person = {
    firstName: 'olivier',
    lastName: 'liechti'
};
person.gender = 'male';
person['zip'] = 1446;
delete person.zip;
for (var key in person) {
    console.log(key + ' : ' + person[key]);
}
```

Rule #4
The language has no support for classes
There are 3 ways to create objects

• class is a reserved word in
JavaScript, but it is not used
in the current version of the
language (reserved for the
future).
• A constructor is function like
any other (uppercase is a
coding convention).
• It is the use of the new
keyword that triggers the
object creation process.

```javascript
//create an object with a literal
var person = {
  firstName: 'olivier',
  lastName: 'liechti'
};

// create an object with a prototype
var child = Object.create(person);

// create an object with a constructor
var child = new Person(‘olivier’, ‘liechti’);
```

Rule #5
Every object inherits from a prototype object

```javascript
var person = {
    firstName: 'olivier',
    lastName: 'liechti'
};
console.log(Object.getPrototypeOf(person) === Object.prototype);
var father = {};
var child = Object.create(father);
console.log(Object.getPrototypeOf(child) === father);
function Person(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
}
var john = new Person('John', 'Doe');
console.log(Object.getPrototypeOf(john) === Person.prototype);
```

Every object inherits from a prototype object.
It inherits and can override its
properties, including its methods.
• Objects created with object literals inherit
from Object.prototype.
• When you access the property of an object,
JavaScript looks up the prototype chain
until it finds an ancestor that has a value for
this property.

Rule #6
With patterns, it is possible to implement
class-like data structures

• badGreet is a property that
will be replicated for every
object created with the
Person constructor:
• poor memory
management
• not possible to alter
behavior of all instances at
once
• greet is a property that will
be shared by all instances
(because it will be looked up
along the object inheritance
chain).
• privateVar is not accessible
outside of the constructor.
• fistName is publicly accessible (no encapsulation).

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
var p1 = new Person('olivier', 'liechti');
p1.badGreet();
p1.greet();
```

Rule #7
Arrays are objects
```javascript
var fruits = [
    'apple',
    'pear'
];
fruits.push('banana');
console.log(Object.getPrototypeOf(fruits));
for (var i = 0; i < fruits.length; i++) {
    console.log('fruits[' + i + '] = ' + fruits[i]);
}

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
fruits.push('abricot', 'ananas', 'strawberry', 'orange');
var aFruits = fruits.filter(function (fruit) {
    return fruit.charAt(0) === 'a';
});
aFruits.forEach(function (fruit) {
    console.log(fruit);
});
```

# part 2

• Functions are objects
• Function.prototype vs myFunction.prototype
• Closures
• Module patterns
• this

Rule #8
Functions are objects

```javascript
function aFunction(){}
var f = function(){}
var g = function g(){
 g();
// recursive call
}

var h = function(functionParam){
  functionParam();
}

h(f);
h(g);
```

Rule #9
Whenever a function is defined, an object is created.
Its prototype is Function.prototype.
Its prototype property is the object that will be the
prototype of instances created with the function used as a
constructor.

```javascript
function Robot(){}
var r2d2 = new Robot();
var t1 = Object.getPrototypeOf(Robot) === Function.prototype;
var t2 = Robot.__proto__ === Function.prototype;
```


Rule #10
"new" makes constructors behave in a
special way, but constructors are normal functions

1. A new object is created.
2. Its prototype is set to
Animal.prototype
3. The constructor function is
called; this is bound to the
newly created object.
4. In general, the constructor
does not return any object. In
this case, the result of the
new expression is the newly
created object.

```javascript
function Animal(name){
  this.name = name;
}
var cat = new Animal("Félix");
```

Rule #11
Functions can be nested

An object is created for every
function.
• Each function has access to variables
defined in the parent functions (an in
the global scope).

```javascript
function f1(p1){
  console.log("f1 can see " + p1);
  function f2(p2){
    console.log("f2 can see " + p2 + " " + p1);
    function f3(p3){
      console.log("f3 can see " + p3 + " " + p2 + " " + p1);
    }
    f3(3);
  }
  f2(2);
}
f1(1);
```

Rule #12
A closure is formed when a nested function
accesses a free variable

• In a function, a free variable is a
variable that is neither a local variable,
nor a parameter of the function.
• A closure is the combination of a code
block (the function code) and saved
parent scopes.

```javascript
function f1(p1){
  console.log("f1 can see " + p1);
  function f2(p2){
    console.log("f2 can see " + p2 + " " + p1);
    function f3(p3){
      console.log("f3 can see " + p3 + " " + p2 + " " + p1);
    }
    f3(3);
  }
  f2(2);
}
f1(1);
```


Rule #13
Patterns are applied to create modules



The function is immediately invoked

```javascript
var myModule = function () {
    var aPrivateVar = 'world';
    var privateFunction_1 = function () {
        console.log('Hello ' + aPrivateVar);
    };
    var privateFunction_2 = function () {
    };
    return { publicFunction: privateFunction_1 };
}();
myModule.publicFunction();
```

• When privateFunction_1
accesses aPrivateVar, a
closure is formed.
• is available even after the
immediately invoked function
has returned.
• privateFunction_1
and
privateFunction_2 share
the same parent scope.

http://dmitrysoshnikov.com/ecmascript/javascript-the-core/#closures


Rule #14
The value of this depends on the way a
function has been called

• When a function is called on
an object (i.e. as a method),
then this refers to the object.
• When a function is called as
a function (no dot notation),
then this refers to the global
object).
• There are methods defined
on Function.prototype to
control the value of this:
apply and call.

```javascript
function Robot(name) {
    this.rname = name;
}
Robot.prototype.greet = function greet() {
    debugger;
    console.log('hello ' + this.rname);
    if (this.rname === undefined) {
        return;
    }
    greet();
};
var r2d2 = new Robot('r2d2');
r2d2.greet();
```

https://developer.mozilla.org/fr/docs/Web/JavaScript/Une_r%C3%A9introduction_%C3%A0_JavaScript

https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide

## Javascript libraries


## Presentation framework libraries css + JS 





Yeoman is a combination of tools, which allows to you to setup a complete,
automated, efficient and reliable development workflow.
• Yo is a tool for generating project skeletons (scaffolding). You can create and
share your skeletons. Yo generators are npm modules and you can find one
for most popular web frameworks.
• Bower is a tool for managing “web dependencies”. Not only javascript
modules, but also CSS files, images, etc.
• Grunt is a task runner. It is the tool that drives your automated process, by
executing a series of tasks. There are lots of grunt plugins provided by the
community for all aspects of your project.



How do you pick a generator for your
project?

You probably have an idea of the framework(s) you want to use on the server
and or client side (express, angular, backbone, etc.). You will use this as a first
filter.
• Some of the generators are supported by the Yeoman Team. That is probably a
good indication about the quality and support over time (evolution).
• Developers who use generators can “star” those they like. Sorting by
popularity is also an interesting indication. If the community is big, you can
expect issues to be reported and fixed, to see new features, etc.
• After you have identified promising candidates, you need to get a first
impression. Generate and build a project with each candidate. Look at their
Github repository. Do you like what you see? Do you like the documentation?
• Often, you will need to choose between “lightweight” and very “rich”
generators. Lightweight generators are easier to learn and give you more control
(but more work). Rich generators do a lot of things out-of-the-box but can be
intimidating at first (learning curve to understand the skeleton).

# ex..

Problème gestion de version
commenter des vieux bouts de code...

-> git



# node.js &  npm
note use node js for backend only for dev environnement

CSS pre-processor: Less, Sass with Ruby and Node, Stylus, none
JS preprocessor: CoffeeScript, TypeScript, ECMAScript 6 (Traceur and Babel), none
HTML preprocessor: Jade, Haml, Handlebars, none
TODO Script loader: Require, Webpack, none
TODO Test framework: Jasmine, Mocha, Qunit

#multi page app vs SPA

//see pic

There is a big trend towards “single-page applications”, where some of the
responsibilities are moved from the server to the client side.
• The client initially fetches a single “shell” page, which provides a rendering
context and loads application modules (scripts, markup partials, stylesheets, etc.).
• When the user clicks on hyperlinks, the browser does not (immediately) send an
HTTP request to fetch a new page. Instead, the event is caught and processed by
a JavaScript router on the client side.
• Routing is done on the client side. The JavaScript router (typically provided by
an application framework) looks at the target URL and decides which JavaScript
function needs to be invoked. This function can update the DOM, sometimes in
drastic manners (giving the impression that we move from an “Customers List”
page to a “Customer Details” page).

+ MOBILE

# AngularJS




explore the project scaffol:
wiredep

angular dependency injection
angular annotate


Asynchronous programming techniques


We have already seen that JavaScript relies on asynchronous
programming:
• The JS engine is single-threaded. For this reason, IO operations
have to be non-blocking.
• An event loop is used both in the browser and on the server (node.js):
• As the program executes, events are added to a queue. Every
event has an associate callback function.
• A dispatcher takes the next event in the queue and invokes the
callback function (on the single thread).
• When the callback function returns, the dispatcher takes the next
event in the queue, and continues forever (it’s an event loop).

setTimeout( function() {
console.log(“the callback has been invoked”);
}, 2000);
An event will be added to the queue in 2000 ms. In other
words, the function passed as the first argument will be invoked
in 2 seconds or more (the thread might be busy when the event
is posted...).

$(document).mousemove(function(event){
$("span").text(event.pageX + ", " +
event.pageY);
});
An event will be added to the queue whenever the mouse
moves. In each case, the callback function has access to the
event attributes (coordinates, key states, etc.).
$.get( "ajax/test.html", function( data ) {
$( ".result" ).html( data );
alert( "Load was performed." );
});
An event will be added when the AJAX request has been
processed, i.e. when a response has been received. The
callback function has access to the payload.


## wait

\\ insert callback slides -> 34-47
-> Promise



```html
<div>
  <strong>demo</strong>
</div>
```

```javascript
var test;
function test(){
  var demo = <span class="fragment zoom-in highlight-current-green">'test'</span>;
  var demo = <span class="fragment zoom-in highlight-green highlight-bold">'test'</span>;
  var demo = <span class="fragment grow highlight-current-green">'test'</span>;
  var demo = <span class="fragment fade-out highlight-green">'test'</span>;
}
```

```sql
SELECT *
FROM test
WHERE <span class="fragment zoom-in highlight-green highlight-bold">t = 2</span>;
```



only focus on frontent-app

localstorage








# api

https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop

https://www.getpostman.com/docs/introduction

![](images/postman-logo.png)


## new slide
![](images/vues/schema.png)


<!-- .element class="smaller" -->
<!-- .element class="small" -->

```sql
CREATE OR REPLACE VIEW v_employes1 AS
  SELECT numero, code, nom, prenom, date_naissance
    FROM employes
   WHERE nom Like 'D%';
```
<!-- .element class="fragment" -->

```sql
SELECT * FROM v_employes1;
```
<!-- .element class="run hide col2 start-hidden" data-db="SQLAVANCE" -->



### 1. sub slide
