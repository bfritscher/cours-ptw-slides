
chrome devtool extension

vscode
eslint
vetur


https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd



https://fr.vuejs.org/


https://nodejs.org/



# install vue-cli
$ npm install --global vue-cli
# create a new project using the "webpack" template
$ vue init webpack my-project
# install dependencies and go!


? Project name vue-test
? Project description A Vue.js project
? Author Boris Fritscher <boris@fritscher.ch>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Setup unit tests with Karma + Mocha? No
? Setup e2e tests with Nightwatch? No

   vue-cli · Generated "vue-test".

   To get started:

     cd vue-test
     npm install
     npm run dev

   Documentation can be found at https://vuejs-templates.github.io/webpack



$ cd my-project
$ npm install
$ npm run dev

in vscode edit settings

    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "vue"
    ]






logo
https://www.iconfinder.com/icons/701495/shooping_cart_shopping_shoppingbag_icon#size=128

https://commons.wikimedia.org/wiki/File:Shopping_cart_with_food_clip_art_2.svg

https://pixabay.com/en/bag-seeds-food-natural-organic-576697/


https://vuematerial.github.io

 material

 npm install vue-material --save

<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';


https://www.materialpalette.com/green/blue
https://materialdesignicons.com/
https://materialdesignicons.com/


manifest

https://tomitm.github.io/appmanifest/


barcode

https://serratus.github.io/quaggaJS/

 npm install quagga --save

import Quagga from 'quagga';

https://world.openfoodfacts.org/code/7614800238001.json
fetch('https://world.openfoodfacts.org/api/v0/product/7614800238001.json').then((response) => {return response.json()}).then(console.log)


status: 1 / 0 = not_found
product.image_front_small_url
product.product_name_fr

product.sources[0].url id=="openfood-ch"

https://world.openfoodfacts.org/cgi/search.pl?search_terms=ice%20tea%20migros&search_simple=1&json=1


DB
https://fr.wikipedia.org/wiki/Liste_de_fruits_comestibles
https://fr.wikipedia.org/wiki/Liste_de_l%C3%A9gumes


TODO Fetch API

https://davidwalsh.name/fetch
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


Shake

https://github.com/alexgibson/shake.js

navigator.vibrate([200, 100, 200]);


TTS

fr = speechSynthesis.getVoices().filter(v => v.lang.indexOf('fr') >= 0)[0]
txt = new SpeechSynthesisUtterance('Bonjour!')
txt.voice = fr
txt.lang = 'fr-FR'
window.speechSynthesis.speak(txt)

https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

STT

 window.SpeechRecognition = window.SpeechRecognition        ||
                                    window.webkitSpeechRecognition  ||
                                    null;
var recognizer = new window.SpeechRecognition();
// Recogniser doesn't stop listening even if the user pauses
recognizer.continuous = false;
recognizer.interimResults = false;
recognizer.lang = 'fr-FR';
// Start recognising
recognizer.onresult = function(event) {
   textContent = '';
   for (var i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
         textContent = event.results[i][0].transcript + ' (Confidence: ' + event.results[i][0].confidence + ')';
      } else {
         textContent += event.results[i][0].transcript;
      }
   }
   console.log(textContent);
   recognizer.stop();
};

  recognizer.onerror = function(event) {
      recognizer.stop();
    /*
    if (event.error == 'no-speech') {
      showInfo('info_no_speech');
      ignore_onend = true;
    }
    if (event.error == 'audio-capture') {
      showInfo('info_no_microphone');
    }
    if (event.error == 'not-allowed') {
      if (event.timeStamp - start_timestamp < 100) {
        showInfo('info_blocked');
      } else {
        showInfo('info_denied');
      }
    }
    */
  };

recognizer.start();



google search


https://developers.google.com/custom-search/json-api/v1/reference/cse/list

`https://www.googleapis.com/customsearch/v1?cx=011288001747608865807:a7rxzv4srri&q=${item.name}&searchType=image&safe=high&key=AIzaSyBlh2KvC84vD0cebFOlMSnLe0-Dx1mc-2A`



firebase
npm install -g firebase-tools

login, init, serve, deploy


https://github.com/vuejs/vuefire


https://github.com/firebase/FirebaseUI-Web

npm install firebase vuefire --save

npm install firebaseui --save