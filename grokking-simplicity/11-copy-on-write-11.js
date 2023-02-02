let arr = [1, 2, 3];

function withArrayCopy(array, modify) {
  let copy = array.slice();
  modify(copy);
  return copy;
}

// function arraySet(array, idx, value) {
//     return withArrayCopy(array, function(copy){
//         copy[idx] = value;
//     })
// }

// console.log(arraySet(arr, 0, 3), arraySet === arr);
// ------------------------------------------------------------

function push(array, elem) {
  return withArrayCopy(array, function (copy) {
    copy.push(elem);
  });
}

console.log('push', push(arr, 2));

function drop_last(array) {
  return withArrayCopy(array, function (copy) {
    copy.pop();
  });
}

console.log('drop_last', drop_last(arr));

function drop_first(array) {
  return withArrayCopy(array, function (copy) {
    copy.shift();
  });
}

console.log('drop_first', drop_first(arr));
