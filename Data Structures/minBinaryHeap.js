// Big O - Insertion: O(log N), Deletion: O(log N), Search: o(N)

class PriorityQueue {
  constructor() {
    this.val = []
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.val.push(newNode)
    this.bubbleUp()
    return this.val
  }
  swap(arr, idx1, idx2) {
    ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  bubbleUp() {
    let idx = this.val.length - 1
    let element = this.val[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.val[parentIdx]
      if (element.priority >= parent.priority) break
      this.swap(this.val, idx, parentIdx)
      idx = parentIdx
    }
  }
  dequeue() {
    if (this.val.length === 0) return null
    if (this.val.length === 1) return this.val.pop()
    this.swap(this.val, 0, this.val.length - 1)
    let oldRoot = this.val.pop()
    this.bubbleDown()
    return oldRoot
  }
  bubbleDown() {
    let idx = 0
    let element = this.val[0]
    let length = this.val.length
    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let rightChild, leftChild
      let swapIdx = null
      if (leftChildIdx < length) {
        leftChild = this.val[leftChildIdx]
        if (leftChild.priority < element.priority) {
          swapIdx = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.val[rightChildIdx]
        if (
          (!swapIdx && rightChild.priority < element.priority) ||
          (swapIdx && rightChild.priority < leftChild.priority)
        ) {
          swapIdx = rightChildIdx
        }
      }
      if (!swapIdx) break
      this.swap(this.val, swapIdx, idx)
      idx = swapIdx
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

let heap = new PriorityQueue()
heap.enqueue('Common Cold', 4)
heap.enqueue('Symphilis', 2)
heap.enqueue('HIV/AIDS', 3)
heap.enqueue('Flu', 4)
heap.enqueue('Broken Knee', 2)
heap.enqueue('Burst head', 1)
heap.enqueue('Blood Pressure', 3)
