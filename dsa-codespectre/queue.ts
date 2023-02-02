// LAST IN LAST OUT

// can using stack
// can using linked list
// here will using arrays

class Queue {
  private data: any;
  constructor(q: any[] = []){
    this.data = q
  }

  getData(){
    return this.data
  }

  //delete item from the first
  dequeue():any{
    if(this.size() < 0){
      throw new Error('Empty queue')   
    }
    return this.data.shift()
  } 

  //add item to the last
  enqueue(value: any):void{
    this.data.push(value)
  }

  size():number{
    return this.data.length
  }

  peek():any{
    if(this.size() < 0){
      throw new Error('Empty queue')
    }
    return this.data[0]

  }
}

let groceryLine = new Queue([{name: 'John', items: ['apples', 'pinnaple']}, {name: 'Elizabeth', items: ['carrot', 'burger']}])

groceryLine.enqueue({name:'Sam', items: ['potato', 'corn', 'chicken']})
// console.log(groceryLine.dequeue())
console.log(groceryLine.peek())
console.log(groceryLine.getData())


function groceryStoreCheckout(line: Queue):void{
  while(line.size() > 0){
    let customer = line.dequeue()
    console.log(`${customer.name} is checking out with ${customer.items}`)
  }
} 

groceryStoreCheckout(groceryLine)