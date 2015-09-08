//$0 = <li>​b​</li>​
$($0) // [<li>​b​</li>​]
$($0)[0] //<li>​b​</li>​
$0.className //""
$0.className //"fun big"
$0.className.split(' ') //["fun", "big"]
$0.className.split(' ').indexOf('big') //1
var list = $0.className.split(' ');
var idx = list.indexOf('big');
var list = $0.className.split(' ');
var idx = list.indexOf('big');
if(idx >=0){
  list.splice(idx, 1);
  $0.className = list.join(' ');
}
var list = $0.className.split(' ');
var className = 'big';
var idx = list.indexOf('big');
if(idx >=0){
  list.splice(idx, 1);
}else{
  list.push(className);
}
$0.className = list.join(' ');

var list = $0.className.split(' ');
var className = 'big';
var idx = list.indexOf('big');
if(idx >=0){
  list.splice(idx, 1);
}else{
  list.push(className);
}
$0.className = list.join(' ');

var list = $0.className.split(' ');
var className = 'big';
var idx = list.indexOf('big');
if(idx >=0){
  list.splice(idx, 1);
}else{
  list.push(className);
}
$0.className = list.join(' ');

"fun big"
function toggleClass(element, className){
var list = element.className.split(' ');
var idx = list.indexOf(className);
if(idx >=0){
  list.splice(idx, 1);
}else{
  list.push(className);
}
element.className = list.join(' ');
}

toggleClass($0, 'big')
toggleClass($0, 'hello')


jQuery($0) //[<li class=​"fun hello">​b​</li>​]
jQuery($0).toggleClass //(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b…
jQuery($0).addClass //(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[]…
window.toggleClass
toggleClass(element, className){
var list = element.className.split(' ');
var idx = list.indexOf(className);
if(idx >=0){
  list.splice(idx, 1);
}else{
  list.push(className);
}
element.class…
window.document
#document
toggleClass