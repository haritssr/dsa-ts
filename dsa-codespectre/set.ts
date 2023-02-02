//in object
//of array

//1,1,2,2,3
//1,2,3

// set is unorder

//only allow number
let numberSet = new Set<number>()
let numberSetTwo = new Set<number>()

//only allow string
let stringSet = new Set<string>()

//unioning two Set
function union<T>(a: Set<T>, b: Set<T>): Set<T>{
  let c = new Set<T>(a) //create a new set
  //looping through b set
  for(const k of b){
    //uniqueness
    c.add(k)
  }
  return c
}

//intersection
function intersection<T>(a: Set<T>, b: Set<T>): Set<T>{
  let c = new Set<T>()
  //looping through a set
  for(const k of b){
    if(a.has(k)){
      c.add(k)     
    }
  }
  return c;
}

//different
// function different<T>(a: Set<T>, b:Set<T>): Set<T>{
//   let c = new Set<T>()
//   //looping through a
//   for(const k of a){
//     if(!b.has(k)){
//       c.add(k)
//     }
//   }//looping through b
//   for(const k of b){
//     if(!a.has(k)){
//       c.add(k)
//     }
//   }
//   return c
// }

//different
function different<T>(a: Set<T>, b:Set<T>): Set<T>{
  let y = new Set<T>(a)
  let z  = new Set<T>(b)
  let c = new Set<T>([...y, ...z])
  //looping through a
  for(const k of a){
    if(b.has(k)){
      c.delete(k)
    }
  }
  return c
}

//check is set is subset of another set
// a.size =< b.size
// does 'a' is subset of 'b'? 
function isSubset<T>(a: Set<T>, b: Set<T>):boolean{
  for(const k of a){
    if(!b.has(k)){
      return false;
    }
  }
  return true; 
}

//ADDING SET
numberSet.add(3).add(4)
//add(1).add(2).
numberSetTwo.add(3).add(4).add(5).add(6)
// 

//OTHER PROPERTIES
// numberSet.delete(9)
// console.log(numberSet.has(5))
// console.log(numberSet.size);
// console.log(numberSet);

//
let unionSet = union<number>(numberSet, numberSetTwo);
let intersectionSet = intersection<number>(numberSet, numberSetTwo)
let differentSet  = different<number>(numberSet, numberSetTwo)

console.log('numberSet:',numberSet);
console.log('numberSetTwo:',numberSetTwo);
console.log('unionSet:',unionSet)
console.log('intersectionSet:',intersectionSet);
console.log('differentSet:', differentSet);
console.log('isSubset:', isSubset(numberSet, numberSetTwo));


