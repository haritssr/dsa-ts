/*
input: 'cat', 'car', 'bar'
function setup(input)
function inInDirect(word)
setup(['cat', 'car', 'bar'])
isInDirect('cat') // true
isInDirect('horse') //false

Wildcard
isInDirect('ca*') // true
isInDirect('*orse') //false
*/

let gArr = [];

function setup(gArr, NewArray) {
  let copy = gArr.slice();
  let a = [...copy, ...NewArray];
  return a;
}

function isInDict(arr, word) {
  let targetWord = arr[arr[word]];

  return arr.includes(word);
}
let newGArray = setup(gArr, ['cat', 'horse', 'bar']);
console.log(newGArray);

console.log(isInDict(newGArray, 'cat')); //true

console.log(isInDict(newGArray, '*at')); //true
console.log(isInDict(newGArray, 'hosr*')); //false
