class LinkedListNode<T> {
  val: T;
  // doubly linked list
  next: LinkedListNode<T> | null;
  prev: LinkedListNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

interface List<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  size: number;
}

interface EqualsFunction<T> {
  (a: T, b: T): boolean;
}

const defaultEquals = <T>(a: T, b: T): boolean => {
  return a === b;
};

class LinkedList<T> implements Iterable<T> {
  private list: List<T> | undefined;

  // bad for type inference
  // private head: LinkedListNode<T>
  constructor() {
    this.list = undefined;
  }

  //NICETIES

  /**
   * @return (number)
   * **/
  size(): number {
    if (this.list) return this.list.size;

    return 0;
  }

  isEmpty(): boolean {
    return !this.list;
  }

  //INSERTION

  addFront(val: T): void {
    const newNode = new LinkedListNode(val);
    if (this.list) {
      this.list.head.prev = newNode;
      newNode.next = this.list.head;

      this.list.head = newNode;
      this.list.size += 1;
    } else {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1,
      };
    }
  }

  addBack(val: T): void {
    const newNode = new LinkedListNode(val);
    if (this.list) {
      this.list.tail.next = newNode;
      newNode.prev = this.list.tail;

      this.list.tail = newNode;
      this.list.size += 1;
    } else {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1,
      };
    }
  }

  addAt(i: number, val: T): void {
    //in the front
    if (i == 0) {
      this.addFront(val);
      return;
    }
    //in the back
    if (i == this.size()) {
      this.addBack(val);
      return;
    }
    // out of scope/bound
    // this.list in undefined
    if (i < 0 || i >= this.size() || !this.list) {
      throw new Error('Error, out of scope');
    }

    //TRAVERSE
    let cur = this.list.head;
    for (let j = 0; j < i - 1; j++) {
      cur = cur.next!;
    }

    const newNode = new LinkedListNode(val);
    // ! = not null
    cur.next!.prev = newNode;
    newNode.next = cur.next;

    newNode.prev = cur;
    cur.next = newNode;
    this.list.size += 1;
  }

  //ACCESSING

  /**
   * Gets the value of the head - O(1)
   * @returns(T)
   */
  peekFront(): T {
    if (!this.list) throw new Error('Error peekBack');
    return this.list.head.val;
  }

  /**
   * Gets the value of the tail - O(1)
   * @returns(T)
   */
  peekBack(): T {
    if (!this.list) throw new Error('Error peekFront');
    return this.list.tail.val;
  }

  get(i: number): T {
    if (i < 0 || i >= this.size() || !this.list) {
      throw new Error('Out of bound');
    }

    let j = 0;
    let cur = this.list.head;
    while (j < i) {
      cur = cur.next!;
      j++;
    }

    return cur.val;
  }

  /**
   * Removes the first occurrence of the specifies item in the list.
   * Equals function must be supplied for non-primitive values - O(n).
   * @param {T} value - value to search for
   * @param {function(T,T):boolean} equalsFunctions - optional
   * function to check if two items are equal
   * @return {number} the index of the first occurence of the element, and -1 if the element foes not exist.
   */

  indexOf(value: T, equalsFunctions?: EqualsFunction<T>): number {
    if (!this.list) return -1;

    const equalsF = equalsFunctions || defaultEquals;
    let i = 0;
    let cur = this.list.head;
    while (!equalsF(cur.val, value)) {
      cur = cur.next!;
      i += 1;
    }

    return i;
  }

  /**
   * Checks if value is in linked list - O(n)
   * Equals function must be supplied for non-primitive values.
   * @param {T} value - value to search for
   * @param {EqualsFunction<T>} equalsFunction - optional function to check if two items are equal
   * @return {boolean}
   */
  contains(value: T, equalsFunction?: EqualsFunction<T>): boolean {
    const index = this.indexOf(value, equalsFunction ? equalsFunction : undefined);
    return index !== -1;
  }

  /**
   * Removes head - O(1)
   * @retrn {T} - value of removed head
   */
  removeFront(): T {
    if (!this.list) throw new Error('Error coy');
    const val = this.list.head.val;
    if (this.list.head.next) {
      this.list.head.next.prev = null;
      this.list.head = this.list.head.next;
      this.list.size -= 1;
    } else {
      this.list = undefined;
    }
    return val;
  }

  /**
   * Removes tail - O(1)
   * @retrn {T} - value of removed head
   */
  removeBack(): T {
    if (!this.list) throw new Error('Error coy');
    const val = this.list.tail.val;
    if (this.list.tail.prev) {
      this.list.tail.prev.next = null;
      this.list.tail = this.list.tail.prev;
      this.list.size -= 1;
    } else {
      this.list = undefined;
    }
    return val;
  }
}
