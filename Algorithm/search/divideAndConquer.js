// Method 1 - Time complexity(Average and worst: o(log n)); space complexity: o(1)

const search = (arr, val) => {
  let min = 0
  let max = arr.length - 1
  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    if (arr[middle] < val) {
      min = middle + 1
    } else if (arr[middle] > val) {
      max = middle - 1
    } else {
      return middle
    }
  }
  return -1
}
search([1, 2, 4, 5, 6, 7, 9], 4)
