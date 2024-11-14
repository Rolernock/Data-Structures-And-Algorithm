// Example 1 - insertion o(1), removal o(1), searching o(n), access o(n)

class Node {
  constructor(val) {
    this.val = val
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }
  shift() {
    if (!this.head) return undefined
    let oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (index === undefined || index < 0 || index >= this.length)
      return undefined
    let counter, curr
    if (index <= this.length / 2) {
      counter = 0
      curr = this.head
      while (index !== counter) {
        counter++
        curr = curr.next
      }
    } else {
      counter = this.length - 1
      curr = this.tail
      while (index !== counter) {
        counter--
        curr = curr.prev
      }
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
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)
    let newNode = new Node(val)
    let preNode = this.get(index - 1)
    let currNode = preNode.next
    preNode.next = newNode
    newNode.prev = preNode
    newNode.next = currNode
    currNode.prev = newNode
    this.length++
    return true
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    let prevNode = this.get(index - 1)
    let currNode = prevNode.next
    let nextNode = currNode.next
    prevNode.next = nextNode
    nextNode.prev = prevNode
    currNode.prev = null
    currNode.next = null
    this.length--
    return currNode
  }
  reverse() {
    let currentNode = this.head
    let prevNode = null

    this.tail = this.head
    while (currentNode) {
      const nextNode = currentNode.next
      currentNode.next = prevNode
      currentNode.prev = nextNode

      prevNode = currentNode
      currentNode = nextNode
    }

    this.head = prevNode
    return this
  }

  print() {
    let curr = this.head
    let newArr = []
    while (curr) {
      newArr.push(curr.val)
      curr = curr.next
    }
    return newArr
  }
}

let double = new DoublyLinkedList()
double.push(1)
double.push(2)
double.push(3)
double.push(4)
