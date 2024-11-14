class MaxBinaryHeap {
  constructor() {
    this.val = []
  }
  insert(newVal) {
    this.val.push(newVal)
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
      if (element <= parent) break
      this.swap(this.val, idx, parentIdx)
      idx = parentIdx
    }
  }
  extractMax() {
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
        if (leftChild > element) {
          swapIdx = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.val[rightChildIdx]
        if (
          (!swapIdx && rightChild > element) ||
          (swapIdx && rightChild > leftChild)
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

let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
