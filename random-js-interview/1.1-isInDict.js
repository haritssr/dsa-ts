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

class Dictionary {
  constructor(wordsArray) {
    this.dict = wordsArray;
  }

  isInDict(word) {
    return this.dict.some(dictWord => {
      const regexTemplate = word.replaceAll('*', '.');
      const regex = new RegExp(`${regexTemplate}$`);
      return regex.test(dictWord);
    });
  }
}

const test = new Dictionary(['cat', 'car', 'bar']);

console.log(test.isInDict('cat')); //true
console.log(test.isInDict('hor')); //false
console.log(test.isInDict('*at')); //true
console.log(test.isInDict('*a*')); //true
console.log(test.isInDict('don')); //false


/*

TIME COMPLEXITY
.some() - O(n)


*/