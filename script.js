//Método forEach
const arrayForEachUm = [10, 20, 30, 44, 55]; // array para iteração do método

//array em que nossa callback vai colocar os números multiplicados
const arrayVazioUM = [];
//nossa callback
function callbackForEachUm(element) {
  return arrayVazioUM.push(element * 2)
}

function forEachUm(array, callback) {

  /*  let oisis = []  */

  for (let i = 0; i < array.length; i++) {
    callback(array[i])

  } //sua lógica

}

console.log(forEachUm(arrayForEachUm, callbackForEachUm)); //undefined
console.log(arrayVazioUM); // (5) [20, 40, 60, 88, 110]

//Método Find --------

const arrayFind = [12, true, "alfafa", 4, 5]; // array para iteração do método

//nossa primeira callback testa se o elemento é maior que 2 e menor que 12
function callbackFind(element) {
  if (element > 2 && element < 12) {
    return true;
  }
}

//nossa segunda callback testa se existe algum elemento maior que 15
function callbackFindTwo(element) {
  if (element > 15) {
    return true;
  }
}

function find(array, callback) {

  let arrayFind = []

  for (let i = 0; i < array.length; i++) {
    let numeros = array[i]
    arrayFind.push(numeros)
  }

  return callback(arrayFind)
  //sua lógica aqui
}
console.log(find(arrayFind, function (element) {
  for (let i = 0; i < element.length; i++) {
    if (element[i] > 2 && element[i] < 12) {
      return true;
    }
  }

}))
console.log(find(arrayFind, function (element) {
  for (let i = 0; i < element.length; i++) {
    if (element[i] > 15) {
      return false;
    }
  }
}))
// console.log(find(arrayFind, callbackFind));
// console.log(find(arrayFind, callbackFindTwo));

//Método IndexOf --------

const arrayIndexOf = [595, 206, "apollo", false, null, undefined, 8]; // array para iteração do método

//primeira callback que procura algum elemento que seja uma string
function callbackIndexOf(element) {
  return typeof element === "string" && true;
}

//segunda callback que testa se existe algum elemento igual a 3 no array
function callbackIndexOfTwo(element) {
  return element == 3 && true;
}

function indexOf(array, callback) {

  let arrayIndexOf = []

  for (let i = 0; i < array.length; i++) {
    arrayIndexOf.push(array[i])
  }

  return callback(arrayIndexOf)
  //sua lógica aqui
}

console.log(indexOf(arrayIndexOf, callbackIndexOf));
console.log(indexOf(arrayIndexOf, callbackIndexOfTwo));

//Método Includes --------

const arrayIncludes = [53, 2, "duck", NaN, 456, 7]; // array para iteração do método

function includes(array, searchElement) {

  for (let i = 0; i < array.length; i++) {
    if (searchElement == array[i]) {
      return true
    }
  }
  return false
  //sua lógica
}

console.log(includes(arrayIncludes, "duck")); //true
console.log(includes(arrayIncludes, 500)); //false

//Método some --------
const arrySome = [12, 82, 563, 414, null]; // array para iteração do método
const callbackSome = (element) => {
  return element > 82 && true;
};

const callbackSome2 = (element) => {
  if (element) {
    return false;
  }
};

function some(array, callback) {

  let arraySoma = []

  for (let i = 0; i < array.length; i++) {
    arraySoma.push(array[i])
  }
  return callback(arraySoma)
  //sua lógica aqui
}

console.log(some(arrySome, callbackSome));
console.log(some(arrySome, callbackSome2));

//Método Join --------

const arrayJoin = ["Fogo", "no", "Parquinho"]; // array para iteração do método

function join(array, value) {

  let strDeJoin = ""

  for (let i = 0; i < array.length; i++) {
    strDeJoin += `${array[i]}${value}`
  }
  return strDeJoin
  //sua lógica aqui
}
console.log(arrayJoin, join(arrayJoin, " "));
console.log(arrayJoin, join(arrayJoin, ""));
console.log(arrayJoin, join(arrayJoin, "-"));

//Método forEach --------
//const arrayForEach = [10, 20, 30, 44, 55]; // array para iteração do método

//array em que nossa callback vai colocar os números multiplicados
// const arrayVazio = [];
//nossa callback
//function callbackForEach(element) {
//  return arrayVazio.push(element * 2);
//}

//function forEach(array, callback) {

  //let arrayUm = []

//  for (let i = 0; i < array.length; i++) {
//    let numero = array[i]
 //   arrayUm.push(numero)
 /// }
  //sua lógica aqui
 // return callback(arrayUm)
//}
//console.log(forEach(arrayForEach, function (element) {
//  let arrayDois = []
 // for (let i = 0; i < element.length; i++) {
//    arrayDois.push(element[i] * 2);
 // }
 // return arrayDois
//}))
/* console.log(forEach(arrayForEach, callbackForEach)); //undefined
console.log(arrayVazio); 
 */
