class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }
  enqueue(val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = this.first
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
    return this.length
  }
  dequeue() {
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

let q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
