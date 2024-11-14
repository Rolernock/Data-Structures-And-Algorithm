// Method 1 - Time complexity o(log n); Space complexity o(1)
const binarySearch = (arr, val) => {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (arr[middle] < val) {
      left = middle + 1
    } else if (arr[middle] > val) {
      right = middle - 1
    } else {
      return middle
    }
  }
  return -1
}

binarySearch([1, 2, 3, 4, 5, 6], 1)
