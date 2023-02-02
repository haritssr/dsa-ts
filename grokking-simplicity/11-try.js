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
// console.log("push",push(arr, 2));

function drop_last(array) {
  return withArrayCopy(array, function (copy) {
    copy.pop();
  });
}
// console.log("drop_last", drop_last(arr));

function drop_first(array) {
  return withArrayCopy(array, function (copy) {
    copy.shift();
  });
}
// console.log("drop_first", drop_first(arr));

let o = {
  name: 'Haris',
  age: '23',
};

let n = Object.assign({}, o);
// console.log(n,o, n === o );

// function objectSet(object, key, value){
//     let copy = Object.assign({}, object);
//     object[key] = value;
//     return copy
// }

function objectSet(object, key, value) {
  return withObjectCopy(object, function (copy) {
    copy[key] = value;
  });
}
// console.log('objectSet', objectSet(o, 'address', 'maharta'),o);

function objectDelete(object, key) {
  return withObjectCopy(object, function (copy) {
    delete copy[key];
  });
}
// console.log('objectDelete', objectDelete(o, 'name'), o);

function withObjectCopy(object, modify) {
  let copy = Object.assign({}, object);
  modify(copy);
  return copy;
}

function tryCatch(f, errorHandling) {
  try {
    return f();
  } catch (error) {
    return errorHandling(error);
  }
}

// console.log(tryCatch(sendEmail, logToSnapErrors));

let increment = makeAdder(1);
console.log(increment(10)); // 11

let plus10 = makeAdder(10);
console.log(plus10(12)); // 22

function makeAdder(initialValue) {
  return function (y) {
    return initialValue + y;
  };
}
