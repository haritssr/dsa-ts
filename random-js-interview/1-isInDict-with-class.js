/*
input: 'cat', 'car', 'bar'
function setup(input)
function inInDirect(word)
setup(['cat', 'car', 'bar'])
isInDirect('cat') // true
isInDirect('horse') //false
*/

class Dictionary {
  arr = [];
  constructor() {}

  setArr(newArr) {
    this.arr = this.arr.concat(newArr);
  }

  getArr() {
    return this.arr;
  }

  isInDict(word) {
    return this.arr.includes(word);
  }
}

const test = new Dictionary([]);

console.log(test.setArr(['cat', 'horse', 'fish']));
console.log(test.getArr());
console.log(test.isInDict('cat')); //true
console.log(test.isInDict('horse')); //true
console.log(test.isInDict('kingkong')); //true

let a = new Set('a');
console.log(a.has('a'));
