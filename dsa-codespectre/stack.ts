//LAST IN FIRST OUT

class Stack{
  private data: any[] | null
  constructor(){
    this.data = null
  }

  getData(){
    return this.data
  }
  
  push(item: any):void{
    if(!this.data){
      this.data = [item]
    } else {
      this.data.push(item)
    }
  }

  pop():any{
    if(this.data && this.data.length > 0){
      return this.data.pop() //pop the value and return it (desctructive)
    } else {
      throw new Error('Cannot pop empty stack')
    }
  }

  peek():any{
    if(this.data && this.data.length > 0){
      return this.data[this.data.length -1]
    }
  }

  size(){
    if(!this.data){
      throw new Error("Can't return an empty stack")
    }
    return this.data.length
  }

  popAll():void{
    while(this.data && this.data.length > 0){
      console.log(this.pop())
      // console.log(this.getData())
    }
    this.data = null
  }
}

function reverse(s: Stack):Stack{
  let r = new Stack()
  while(s.size() > 0){
    r.push(s.pop())
  }
  return r;
}

let stack = new Stack();
// stack.push(55);
// // console.log(stack.pop())
// console.log('peek:',stack.peek())
// stack.push(56)
// console.log('pop:',stack.pop())
// console.log('peek:',stack.peek())
// console.log('data:',stack.getData())
// stack.push(57)
// stack.push(58)
// stack.push(59)
// stack.push(60)
// stack.push('satu')
// stack.push({yes: 'dua'})
// console.log('size:',stack.size())
// console.log('data:',stack.getData())
// console.log('---------------')
// console.log('pop:',stack.pop())
// console.log('size:',stack.size())
// console.info('data:',stack.getData())
// console.log('---------------')
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
// console.log('size:',stack.size())
// console.info('data:',stack.getData())
// console.log('---------------')
// console.log('Pop All:')
// stack.popAll()
// console.log('---------------')
console.log('size:',stack.size())
console.info('data:',stack.getData())


let newStack = reverse(stack)
newStack.popAll()