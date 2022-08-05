//Método forEach
const arrayForEachUm = [10, 20, 30, 44, 55]; // array para iteração do método

//array em que nossa callback vai colocar os números multiplicados
const arrayVazioUM = [];
//nossa callback
function callbackForEachUm(element) {
  return arrayVazioUM.push(element * 2)
}

function forEachUm(array, callback) {

  for (let i = 0; i < array.length; i++) {
    callback(array[i])

  } //sua lógica

}
console.log(forEachUm(arrayForEachUm, callbackForEachUm)); //undefined
console.log(arrayVazioUM); // (5) [20, 40, 60, 88, 110]

//Método Find

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

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i]
    }
    if (callback(array[i])) {
      return array[i]
    }
  }
  //sua lógica
}
console.log(find(arrayFind, callbackFind)); // 4
console.log(find(arrayFind, callbackFindTwo)); // undefined

//Método IndexOf --------

const arrayIndexOf = [595, 206, false, "apollo", null, undefined, 8]; // array para iteração do método

//primeira callback que procura algum elemento que seja uma string
function callbackfindIndex(element) {
  return typeof element === "string" && true;
}

//segunda callback que testa se existe algum elemento igual a 3 no array
function callbackfindIndexTwo(element) {
  return element == 3 && true;
}

function indexOf(array, callback) {

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return i
    }
  }
  return -1
  //sua lógica aqui
}

console.log(indexOf(arrayIndexOf, callbackfindIndex));
console.log(indexOf(arrayIndexOf, callbackfindIndexTwo));

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
const arrySome = [12, 563, 82, 414, null]; // array para iteração do método

const callbackSome = (element, index, array) => {
  if (element > 83) {
    return true;
  }
};

const callbackSome2 = (element, index, array) => {
  if (element) {
    return true;
  }
};

function some(array, callback) {

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
     return callback(array[i], i, array)
    } 
  }
  return false
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

