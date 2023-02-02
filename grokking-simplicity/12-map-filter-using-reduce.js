// grokking simplicity page 314



function forEach(array, f) {
  for (let i = 0; i < array.length; i++) {
    let a = array[i];
    f(a);
  }
}

// map v1
// function map(array, f) {
//   let newArray = [];
//   forEach(array, function (element) {
//     newArray.push(f(element));
//   });
//   return newArray;
// }

// map v2
// non mutating operation (innefficient)
// ret = []
// item = array element
// [item] = [element]
// function map(array, f) {
//   return reduce(array, [], function (ret, item) {
//     return ret.concat(f([item]));
//   });
// }

// map v3
// using mutating operation (efficient)
function map(array, f) {
  return reduce(array, [], function (ret, item) {
    ret.push(f(item));
    return ret;
  });
}

function filter(array, f) {
  let newArray = [];
  forEach(array, function (element) {
    if (f(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}

function reduce(array, init, f) {
  let accum = init;
  forEach(array, function (element) {
    accum = f(accum, element);
  });
  return accum;
}

let a = [1, 2, 3, 4, 5];
let mapb = map(a, a => a * 2);
console.log('map', mapb, a === mapb);

console.log(
  'filter',
  filter(a, a => a > 2)
);

console.log(
  'reduce',
  reduce(a, 0, (a, b) => a + b)
);
