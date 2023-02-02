/*
One piece of code we’ll need to write is useful during the holidays. We need to send out
postcards to all of our customers. We need an object containing the first name, last name,
and address of each customer. Using map(), write the code to generate this array of objects.
Givens
• customers is an Array of all customers
• customer.firstName, customer.lastName, and
customer.address will give you the data you need
*/

function forEach(array, f) {
  for (let i = 0; i < array.length; i++) {
    let a = array[i];
    f(a);
  }
}

function map(array, f) {
  let newArray = [];
  forEach(array, function (element) {
    newArray.push(f(element));
  });
  return newArray;
}

// let a = [1,2,3]
// let b = map(a, x => x)
// console.log(a, b, a === b); // [ 1, 2, 3 ] [ 1, 2, 3 ] false

// console.log(map([], a => a+1)) // []

// map(customers, function (customer) {
//   return {
//     firstName: customer.firstName,
//     lastName: customer.lastName,
//     address: customer.address,
//   };
// });

//SELECT

function selectBestCustomers(customers) {
  let newArray = [];
  forEach(customers, function (customer) {
    if (customer.purchase.length >= 3) {
      newArray.push(customer);
    }
  });
  return newArray;
}

function selectCustomersBefore(customers, date) {
  let newArray = [];
  forEach(customers, function (customer) {
    if (customer.signupDate < date) {
      newArray.push(customer);
    }
  });
  return newArray;
}

function selectCustomersAfter(customers, date) {
  let newArray = [];
  forEach(customers, function (customer) {
    if (customer.signUp > date) {
      newArray.push(customer);
    }
  });
  return newArray;
}

function singlePurchaseCustomers(customers) {
  let newArray = [];
  forEach(customers, function (customer) {
    if (customer.purchase.length === 1) {
      newArray.push(customer);
    }
  });
  return newArray;
}

//FILTER DEFINITION

function filter(array, f) {
  let newArray = [];
  forEach(array, function (element) {
    if (f(e)) {
      newArray.push(element);
    }
  });
  return newArray;
}

// console.log(filter([1, 2, 3], a => true)); [1,2,3]
// console.log(filter([1, 2, 3], a => false)); []

// console.log(filter([1,2,3], a => a > 2)) // 3
// console.log(filter([], a => a > 2)) // []

//SELECT NEW VERSION

function selectCustomerBefore(customers, date) {
  return filter(customers, function (customer) {
    return customer.signup < date;
  });
}

function selectCustomersAfter(customers, date) {
  return filter(customers, function (customer) {
    return customer.signup > date;
  });
}

function selectBestCustomers(customers) {
  return filter(customers, function (customer) {
    return customer.purchase.length >= 3;
  });
}

function singlePurchaseCustomers(customers) {
  return filter(customers, function (customer) {
    return customer.purchase.length === 0;
  });
}

// ?---

function countAllPurchases(customers) {
  let total = 0;
  forEach(customers, function (customer) {
    total += customer.purchase.length;
  });
  return total;
}

function concateArrays(arrays) {
  let result = [];
  forEach(arrays, function (array) {
    result = result.concat(array);
  });
  return result;
}

function customersPerCity(customers) {
  let cities = {};
  forEach(customers, function (customer) {
    cities[customer.address.city] += 1;
  });
  return cities;
}

function biggestPurchases(purchases) {
  let biggest = { total: 0 };
  forEach(customers, function (customer) {
    biggest = biggest.total > purchases.total ? biggest : purchases;
  });
  return biggest;
}

//REDUCE DEFINITION

function reduce(array, init, f) {
  let accum = init;
  forEach(array, function (element) {
    accum = f(accum, element);
  });
  return accum;
}

// console.log(
//   reduce([], 0, function (a, b) {
//     return a * b;
//   })
// ); // 0

function countAllPurchases(customers) {
  return reduce(customers, 0, function (total, customer) {
    return (total = total + customer.purchases.length);
  });
}

/* 
The marketing department wants to run a small test. They want to arbitrarily select
approximately one third of the customers and send them a different email from the rest.
For marketing’s purposes, it is good enough to use the user’s ID and check if it’s divisible
by 3. If it is, they’re in the test group. Your task is to write code to generate the test and
non-test groups.
Givens
• customers is an array of all customers.
• customer.id will give you the user’s ID.
• % is the remainder operator; x % 3 === 0 checks if x is divisible by 3.
*/

// let testGroup = filter(customers, function (customer) {
//   return customer.id % 3 == 0;
// });

// let notTestGroup = filter(customers, function (customer) {
//   return customer.id % 3 !== 0;
// });

/* 
reduce() is very useful if you get clever with the accumulator function. Write two functions using reduce() for determining the smallest and largest numbers in an array
without using Math.min() and Math.max().
Givens
• Number.MAX_VALUE is the largest number possible in JavaScript.
• Number.MIN_VALUE is the smallest number possible in JavaScript.
*/

// function min(numbers) {
//   return reduce(numbers, Number.MAX_VALUE, function (accum, number) {
//     return accum > number ? accum : number;
//   });
// }
// function min(numbers) {
//   return reduce(numbers, Number.MAX_VALUE, function(m, n) {
//   if(m < n) return m;
//   else return n;
//   });
//  }

// console.log(min([1, 2, 3, 4]));
