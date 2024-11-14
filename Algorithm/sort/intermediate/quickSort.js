// Method 1 - Time complexity (average: o(n log n) worst: o(n^2) ); Space complexity o(log n)

const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
  let pivotIdx = start
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[start] > arr[i]) {
      pivotIdx++
      swap(arr, pivotIdx, i)
    }
  }
  swap(arr, start, pivotIdx)
  return pivotIdx
}

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    let pivotIdx = pivot(arr, start, end)
    //left
    quickSort(arr, start, pivotIdx - 1)
    //right
    quickSort(arr, pivotIdx + 1, end)
  }
  return arr
}

quickSort([4, 6, 9, 1, 2, 5, 3])
