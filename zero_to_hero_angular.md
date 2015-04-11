# <br>Zero to Hero




# multi page app vs SPA

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




# paper




only focus on frontent-app

other
Bootstrap, Foundation, Angular Material, 
Ionic for mobile

history

http://mattiash.github.io/angular-presentation/presentation.html#1

http://openclassrooms.com/courses/developpez-vos-applications-web-avec-angularjs


https://www.youtube.com/watch?v=aBE0St5yI7U&list=PLjwdMgw5TTLUDlJyx4yIPQjoI-w-7Zs1r

form

http://openclassrooms.com/courses/validation-de-formulaire-simplifiee-avec-angularjs


https://chrome.google.com/webstore/detail/angularjs-batarang-stable/niopocochgahfkiccpjmmpchncjoapek


formulaire et validation
ngMessages


## Javascript libraries


### How do you pick a generator for your project?

You probably have an idea of the framework(s) you want to use on the server
and or client side (express, angular, backbone, etc.). You will use this as a first
filter.

* Some of the generators are supported by the Yeoman Team. That is probably a
good indication about the quality and support over time (evolution).

* Developers who use generators can “star” those they like. Sorting by
popularity is also an interesting indication. If the community is big, you can
expect issues to be reported and fixed, to see new features, etc.

* After you have identified promising candidates, you need to get a first
impression. Generate and build a project with each candidate. Look at their
Github repository. Do you like what you see? Do you like the documentation?

* Often, you will need to choose between “lightweight” and very “rich”
generators. Lightweight generators are easier to learn and give you more control
(but more work). Rich generators do a lot of things out-of-the-box but can be
intimidating at first (learning curve to understand the skeleton).



#################

Theory:
angular basics
MVC


resources: https://docs.angularjs.org/api

modules
directives ng-model
modules

 ng-app="movieApp"

MVC
directives standard

vue et binding

event ng-click
controller $scope

ngApp
ngController
{{}}
expression
ngBind
ngModel
ngRepeat
ngHide/ngShow
$filter
  limitTo
  filter
  orderBy
  uppercase
ngClick
evenenemts


Exercice setup:

yo angular

     _-----_
    |       |    .--------------------------.
    |--(o)--|    |    Welcome to Yeoman,    |
   `---------´   |   ladies and gentlemen!  |
    ( _´U`_ )    '--------------------------'
    /___A___\
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? Would you like to use Sass (with Compass)? (Y/n) No
? Would you like to include Bootstrap? (Y/n) Yes
? Which modules would you like to include?
 (*) angular-animate.js
 ( ) angular-aria.js
 ( ) angular-cookies.js
 ( ) angular-resource.js
 (*) angular-messages.js
 (*) angular-route.js
 (*) angular-sanitize.js
 (*) angular-touch.js

Explore Folder
grunt serve

chrome dev tool
add folder to workspace
map to file system resource

Focus on MainCtrl + view/main.html
styles/main.css


cleanup main.css, index.html add title

Step0

Exercice:

First task:
- Create a form to add a new movie to a list of movies
- display the list of movies
- be able to delete a movie from the lsit

![](images/movie_01.png)


# Theory

localstorage + JSON
show chrome resource tab
plusieurs controlleur
services
di injection
router
$routeParams
$index
ngHref
ngSrc


Exercice:
transform your app to use a service as storage for the movies and helps persiste the into local storage. A movie is now more than a title it is an object which has two properties a title and a comment
- create a service (factory) moviedb
which has  2 private helper
loadLocalStorage to help restore the movies array from storage (json->array)
saveLocalStorage to help to save the movies array to storage array->json   
4 public api methods
getMovies returns a array of movies
addMovie: takes a movie object and adds it to the internal movies array and also perssits to localstorage
removeMovie: removes the given movie from the list and perssistent storage
emptyMovie: return as movie object which has two empty properties title, comment;

- create a controller movie and view and map it to the /movie/:id url
it will display a movie at index id in the movies array
use a filter to display the title in uppercase

- make title in the main.html page clickable to lead to your new movie detail page

#### Theory
constante
$watch && $watchArray
$rootScope
promise
http
postman
$http
$location
ngClass
ngStyle
listenning to events
$fitler function


# Asynchronous programming techniques


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




# api

https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop

https://www.getpostman.com/docs/introduction

![](images/postman-logo.png)



exercice

For now we leave the first page as is and extend the app to display movies from an external web service

add the following to the moviedb service
internal varialbles

var apiUrl = 'http://api.themoviedb.org/3/';
var apiKey = 'c94d4f6ffca20fc972fe6f4e59db06e6';
var baseUrl = 'http://image.tmdb.org/t/p/';

and any other needed

getMovie retunrs a promise http of a movie (http://apiUrlEndpoint/movie/id?api_key=apiKey&append_to_response=similar,releases,credits&language=fr)
getMovieResults retrieve movie results array
searchMovies:http://apiUrlEndpoint/search/movie?api_key=apiKey&language=fr&query=movie_name updates internal movieResults array
upcomingMovies: http://apiUrlEndpoint/movie/upcoming?api_key=apiKey&language=fr updates internal movieResults array
baseUrl: baseUrl as string not function

css
body {
  padding: 0;
  background-repeat: no-repeat;
  background-size: cover;  
}
.movie{
  margin-bottom: 2em;
}
.movie h2{
  height: 66px;
}
.movie .poster{
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 50%;
  height: 250px;
}
.box{
  background-color: rgba(255,255,255,0.8);
}

display the results with a new controller upcoming url and view results
iterate over moviedb.getMovieResults()
create a link for each movie with class movie and col-sm-3 point to the movie page with id from the movie result
title of the movie as h2 
for the poster image use a div with background-image
<div class="poster" ng-style="{'background-image': (m|toBackgroundCSS) }"></div>

create the toBackgroundCSS filter
this is a function which get a movie object and returns either the css url to the placeholder picture or to the poster
url(images/noposter.jpg)
url( baseUrlofmoviedb/w185/movie_poster_path_property)



alter moviectrl to get the movie from the net by id 
explore data structure of the movie json
alter the movie.html view 
to display the poster (same code as before)
to display the title 
the overview
iterate over the data of these three array
releases
similar movies
credits of cast

notice that there are two many release countries
filter them down to only display fr,de,ch 
by creating a filter function in the scope of moviectrl
validCountry


adding search
create a controller search and map it to search with the
we can reuse the result view of upcoming for the research

to start the research and handle the right navmenu highlight lets create a new controllerfor the whole app
add it to the body
add a serach bar to the menu and when it changes get the field value and trigger the search on moviedb

highlight path and morenice
in the app controller we can listen to the $locationChangeSuccess event and if the path is not /search empty the search field
set a new variable on this controller scope with the current path
use this to add the active class on the link menu which is the current active one


finally use a nice backdrop image
add a background-image to the body with a variable on the app scope.
set this variable in the moviectrl (hint: since its a child scope it can see its parent ;-) )
don't forget to reset the backdrop when path changes.


### theory

utilisation d'autres directives

show carousel
http://vasyabigi.github.io/angular-slick/

bower install angular-slick --save
add 'slick' to movieApp

<div class="col-sm-10 col-sm-offset-1">
    <slick dots="true" infinite="false" slides-to-show="3" slides-to-scroll="3" responsive="breakpoints"  init-onload="true" class="slider multiple-items" data="movie.similar.results">
        <div ng-repeat="r in movie.similar.results"><div class="poster" ng-style="{'background-image': (r|toBackgroundCSS) }"></div></div>
    </slick>
</div>

ng-animate?


exercice

try to make the country as flags with ng-flags use master.
bower install ng-flags#master --save


https://github.com/asafdav/ng-flags

make magic
add class slide to ng-view

and this css
.slide.ng-enter,
.slide.ng-leave {
    -webkit-transition: all 1s ease;
    transition: all 1s ease;
    position: absolute;
    width: 100%;
}
.slide.ng-enter {
    left: 100%;
}
.slide.ng-enter-active {
    left: 0;
}
.slide.ng-leave {
    left: 0;
}
.slide.ng-leave-active {
    left: -100%;
}


####

créer ses directives


Exercice

Lets fix our data and make poster more reusable with a custom directive


#step1 replace poster

<div class="poster" ng-style="{\'background-image\': (movie|toBackgroundCSS) }"></div>
with <poster movie="m"></poster>
in results and movie

use a scope for omovie

#step2 add fuctionnality
add a star button to the poster directive template and handle the click function inside the directives link function
change moviedb to store a movie object with the needed information, id, title, poster_path 
create a isMovieFavorite
modify addMovie/removeMovie to use object instead of array to make lookup by id easyer... (or loop array ...)
cleanup unused functions  emptyMovie, getMovies

to reuse results.html in main we can create afunction that links movieResults with movies
favoriteMovies


## 


###
firebase

https://www.firebase.com/docs/web/libraries/angular/quickstart.html

bower install angularfire --save

{
    "rules": {
       "users": {
      "$uid": {
        // grants write access to the owner of this user account whose uid must exactly match the key ($uid)
        ".write": "auth !== null && auth.uid === $uid",
        ".read": "auth !== null && auth.uid === $uid"
        }
      }
    }
}

add login/logout button based on login state

add 3 methods to moviedb
$firebaseAuth, $firebaseObject

    var ref = new Firebase('https://ptw.firebaseio.com');
    var authObj = $firebaseAuth(ref);
    var authData = null;

    function getFirebaseData(){
        console.log('Logged in as:', authData.uid);
        //could do some merge with localStorage...
        movies = $firebaseObject(new Firebase('https://ptw.firebaseio.com/users/' + authData.uid + '/movies'));
    }

    function login(manualLogin){
        authData = authObj.$getAuth();
        if (authData) {
            getFirebaseData();
            return;
        }
        console.log('Logged out');
        if(manualLogin){
            authObj.$authWithOAuthPopup('github')
            .then(function(auth) {
                authData = auth;
                getFirebaseData();
            }).catch(function(error) {
                console.error('Authentication failed:', error);
            });
        }
    }
    login();

    function isLoggedIn(){
        return authData;
    }

    function logout(){
        authObj.$unauth();
        authData = null;
    }
    
    function saveLocalStorage(){
      localStorage.setItem('movies', angular.toJson(movies));
      if(authData){
        movies.$save();
      }
    }
    
    if(savedMovies && Object.keys(movies).length === 0){


### after deploy

A/B testing on similar list

theory





virutal page views
event

#exercice
http://luisfarzati.github.io/angulartics/
https://github.com/GoAugust/angular-google-experiments

bower install angulartics --save
'angulartics', 'angulartics.google.analytics'
// Google Analytics example
ga('send', 'pageview'); // <---- delete this line!

bower install angular-google-experiments --save
googleExperiments
 .config(function(googleExperimentsProvider) {
        googleExperimentsProvider.configure({
            experimentId: 'your-experiment-id-goes-here'
        });
    })

    <div variation="0">Original</div>
<div variation="1">Variation #1</div>

test both version of similaire