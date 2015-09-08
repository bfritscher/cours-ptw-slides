hello = "World" //"World"
var table = ['a', 'b'];
table2 = [['a1', 'a2'],['b2']]
table.push('c')
table.push(23)
table.push([])
table.push(false) //["a", "b", "c", 23, Array[0], false]
table[4] //[]
table[4].push('test')
table // ["a", "b", "c", 23, Array[1]0: "test"length: 1__proto__: Array[0], false]
'0'  == false //true
'0'  === false //false
function plus2 (n){
  return n +2;
}
plus2
plus2(4) //6
var moins1 = function fsdfa(n){
   return n-1;
};
moins1
moins1(3) //2
var monObj = {};
monObj.test = 'salut'; //Object {test: "salut"}
monObj.test2 = 'salut2'; //Object {test: "salut", test2: "salut2"}
function procedure (){
}
procedure() //undefined