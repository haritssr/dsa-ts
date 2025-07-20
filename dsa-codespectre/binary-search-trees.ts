// the readon binary tree so efficient because we can cut half down what we have to look at

class TreeNode {
  public left: TreeNode | null;
  public data: number;
  public right: TreeNode | null;

  constructor(data: number) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

class BinarySearchTree {
  public head: TreeNode | null;
  //head is optional
  constructor(head?: TreeNode) {
    // if there is head, set it head, if not set it null
    this.head = head || null;
  }

  public insert(node: TreeNode | null = this.head, value: number): TreeNode {
    if (node === null) {
      const root = new TreeNode(value);
      return root;
    } else {
      if (value < node.data) {
        node.left = this.insert(node.left, value);
      } else {
        node.right = this.insert(node.right, value);
      }
      return node;
    }
  }

  public inorderTraversal(root: TreeNode | null = this.head): void {
    const temp = root;
    if (temp !== null) {
      this.inorderTraversal(temp.left);
      console.log(temp.data);
      this.inorderTraversal(temp.right);
    }
  }

  public preorderTraversal(root: TreeNode | null = this.head): void {
    const temp = root;
    if (temp !== null) {
      console.log(temp.data);
      this.inorderTraversal(temp.left);
      this.inorderTraversal(temp.right);
    }
  }

  public postorderTraversal(root: TreeNode | null = this.head): void {
    const temp = root;
    if (temp !== null) {
      this.inorderTraversal(temp.left);
      this.inorderTraversal(temp.right);
      console.log(temp.data);
    }
  }

  public search(node: TreeNode | null = this.head, value: number): TreeNode | null{
    const temp = node;
    if(temp === null){
      return null;
    } else if (temp.data === value){
      return temp;
    } else {
      if(value < temp.data){
        return this.search(temp.left, value)
      } else {
        return this.search(temp.right, value)
      }
    }
  }
}

//creating trees
const rootNode = new TreeNode(50);
rootNode.left = new TreeNode(35);
rootNode.right = new TreeNode(60);

//setting rootnode as a center of binary search tree
const BSTree = new BinarySearchTree(rootNode);

//inserting value
BSTree.insert(BSTree.head, 30);
BSTree.insert(BSTree.head, 20);
BSTree.insert(BSTree.head, 40);
BSTree.insert(BSTree.head, 70);
BSTree.insert(BSTree.head, 60);
BSTree.insert(BSTree.head, 80);

console.log(BSTree)

//binary tree traversal - return all the .data
// BSTree.inorderTraversal();
// console.log('----------')
// BSTree.preorderTraversal();
// console.log('----------')
// BSTree.postorderTraversal();


//search
console.log(BSTree.search(BSTree.head, 70));
console.log(BSTree.search(BSTree.head, 72));

