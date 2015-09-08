monObj = {nom: 'Boris', test:33, l: [1, 2, 3]}
JSON.stringify(monObj) //"{"nom":"Boris","test":33,"l":[1,2,3]}"
monJSON = JSON.stringify(monObj)
monObj.nom
monJSON[3] //"o"
monJSON[0] //"{"
JSON.parse(monJSON) //Object {nom: "Boris", test: 33, l: Array[3]}
JSON.parse('[{"a1": 3}, 7]')
variable1 = JSON.parse('[{"a1": 3}, 7]')
variable1[0].a1 //3
localStorage
localStorage.setItem('stockage_ma_variable', variable1)
localStorage.setItem('stockage_ma_variable', JSON.stringify(variable1))
//--refresh
variable1 //undefined
variable1 = localStorage.getItem('stockage_ma_variable') //"[{"a1":3},7]"
variable1.a1 //undefined
variable1 = JSON.parse(variable1) //[Objecta1: 3__proto__: Object, 7]
variable1[0].a1 //3