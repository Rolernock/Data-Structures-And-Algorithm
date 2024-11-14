// Method 1 - Using Loop
// Big O of BST - o(log n)

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(val) {
    let newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let curr = this.root
      while (true) {
        if (val < curr.val) {
          if (!curr.left) {
            curr.left = newNode
            return this
          } else {
            curr = curr.left
          }
        } else {
          if (!curr.right) {
            curr.right = newNode
            return this
          } else {
            curr = curr.right
          }
        }
      }
    }
  }
  search(val) {
    if (!this.root) return false
    let curr = this.root
    let notFound = true
    while (curr && notFound) {
      if (val < curr.val) {
        curr = curr.left
      } else if (val > curr.val) {
        curr = curr.right
      } else {
        notFound = false
      }
    }
    if (!curr) return false
    return curr
  }
  //  Breadth First Search
  bfs() {
    let node = this.root,
      queue = [],
      data = []
    queue.push(node)
    while (queue.length) {
      node = queue.shift()
      data.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  }
  //   Depth First Search PreOrder
  dfsPreOrder() {
    let data = []
    function traverse(node) {
      data.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }

  //  Depth First Search - PostOrder
  dfsPostOrder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.val)
    }
    traverse(this.root)
    return data
  }

  // Depth First Search - InOrder
  dsfInOrder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.val)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}

let tree = new BinarySearchTree()

//           20
//        15    32
//     10   12 30  40
//   5    7      37   50

// Method 2 - Using Recursion
class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(val) {
    let newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
    return this
  }
  insertNode(curr, newNode) {
    if (newNode.val < curr.val) {
      if (!curr.left) {
        curr.left = newNode
      } else {
        this.insertNode(curr.left, newNode)
      }
    } else {
      if (!curr.right) {
        curr.right = newNode
      } else {
        this.insertNode(curr.right, newNode)
      }
    }
  }
}

let tree2 = new BinarySearchTree()
