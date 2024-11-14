// Example 1 - insertion o(1), removal o(1) or o(n), searching o(n), access o(n)

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    let curr = this.head
    let newTail = curr
    while (curr.next) {
      newTail = curr
      curr = curr.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return curr.val
  }
  shift() {
    if (!this.head) return undefined
    let curr = this.head
    this.head = curr.next
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return curr.val
  }
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newTail
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) return null
    let counter = 0
    let curr = this.head
    while (counter !== index) {
      curr = curr.next
      counter++
    }
    return curr
  }
  set(index, val) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(val)
    if (index === 0) return !!this.unshift(val)
    let newNode = new Node(val)
    let prev = this.get(index - 1)
    let curr = prev.next
    prev.next = newNode
    newNode.next = curr
    this.length++
    return true
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === this.length - 1) return this.pop()
    if (index === 0) return this.shift()
    let prevNode = this.get(index - 1)
    let currNode = prevNode.next
    prevNode.next = currNode.next
    this.length--
    return currNode
  }
  reverse() {
    let prevNode = null
    let currentNode = this.head
    let nextNode

    this.tail = this.head // The head will become the tail after reversal.

    while (currentNode) {
      nextNode = currentNode.next // Store the next node.
      currentNode.next = prevNode // Reverse the current node's pointer.
      prevNode = currentNode // Move `prevNode` to the current node.
      currentNode = nextNode // Move `currentNode` to the next node.
    }

    this.head = prevNode // After the loop, `prevNode` will be the new head.

    return this
  }
  //   reverse() {
  //     let node = this.head
  //     this.head = this.tail
  //     this.tail = node
  //     let prev = null
  //     let next = null
  //     for (let i = 0; i < this.length; i++) {
  //       console.log(i, node.val, prev, next)
  //       next = node.next
  //       node.next = prev
  //       prev = node
  //       node = next
  //     }
  //     return this
  //   }
  print() {
    let arr = []
    let curr = this.head
    while (curr) {
      arr.push(curr.val)
      curr = curr.next
    }
    return arr
  }
}

const list = new SinglyLinkedList()
list.push('1')
list.push('2')
list.push('3')
list.push('4')
