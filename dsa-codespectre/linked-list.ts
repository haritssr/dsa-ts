//Big-O = O(n), depend on the length of the LinkedList
export {}


class ListNode{
    public data: number;
    public next: ListNode | null | any;
    constructor(data:number){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    public head: ListNode;
    constructor(head: ListNode){
        this.head = head
    }

    public printData():void{
        let temp = this.head
        while(temp !== null){
            //{data: 5, ListNode: {...}}
            //temp.data = this.head.data = 5
            console.log(temp.data);
            temp = temp.next;
        }
    }

    public length():number{
      let temp = this.head;
      let size = 0;
      while(temp !== null){
        size++
        temp = temp.next
      }
      return size;
    }

    public pushNode(data:number):void{
      if(this.head === null){
        this.head = new ListNode(data)
      } else {
        let temp = this.head
        while(temp.next !== null){
          temp = temp.next;
        }
        temp.next = new ListNode(data)
      }
    }

    // inserting ListNode in first of LinkedList
    public insertHead(data:number):void{
      //creating node
      let node = new ListNode(data)
      //get current head
      let temp = this.head
      //set current head as node, this time LinkedList only node, and previous this.head has been detached
      this.head = node
      //reattaching this.head to new this.head.next or node.next
      this.head.next = temp;
    }

    public find(value: number):boolean{
      let temp = this.head
      while(temp !== null){
        if(temp.data === value){
          return true
        }
        temp = temp.next;
      }
      return false;
    }
}

//METHOD ONE : ADDING LINKED LIST
// let listOne = new ListNode(5)
// let listTwo = new ListNode(10)
// let listThree = new ListNode(15)
// let listFour = new ListNode(20)
// -------------------------------
// listOne.next = listTwo
// listTwo.next = listThree
// listThree.next = listFour

//initializing first node
let nodeOne = new ListNode(5)

//set nodeOne as a first node in a LinkedList object
let linkedList = new LinkedList(nodeOne)

//METHOD TWO : ADDING LINKED LIST
linkedList.pushNode(10);
linkedList.pushNode(15);
linkedList.pushNode(20);  
linkedList.insertHead(0);



//logging test
console.log('linkedList-> ',linkedList)
linkedList.printData()
console.log('linkedList length-> ',linkedList.length())
console.log('Is 5 in the list? ',linkedList.find(5))
console.log('Is 15 in the list? ',linkedList.find(15))
console.log('Is 50 in the list? ',linkedList.find(50))



