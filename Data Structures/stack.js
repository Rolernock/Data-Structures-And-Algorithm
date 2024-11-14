// Adding and removing from the beginning for big O to be o(1) instead of o(n)

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = this.first
    } else {
      newNode.next = this.first
      this.first = newNode
    }
    this.length++
    return this.length
  }
  pop() {
    if (!this.first) return null
    let curr = this.first
    this.first = curr.next
    this.length--
    if (this.length === 0) {
      this.first = null
      this.last = null
    }
    return curr.val
  }
}

let stack = new Stack()
stack.push('1')
stack.push('2')
stack.push('3')
stack.push('4')
