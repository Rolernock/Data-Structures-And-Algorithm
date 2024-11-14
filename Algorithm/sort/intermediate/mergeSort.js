// Method 1 - Time complexity (average and worst: o(n log n)); space complexity: o(n)

const merge = (firstArr, secondArr) => {
  let i = 0
  let j = 0
  let results = []
  while (i < firstArr.length && j < secondArr.length) {
    if (firstArr[i] < secondArr[j]) {
      results.push(firstArr[i])
      i++
    } else {
      results.push(secondArr[j])
      j++
    }
  }
  while (i < firstArr.length) {
    results.push(firstArr[i])
    i++
  }
  while (j < secondArr.length) {
    results.push(secondArr[j])
    j++
  }
  return results
}

const mergeSort = arr => {
  if (arr.length === 0 || arr.length === 1) return arr
  let middle = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, middle))
  let right = mergeSort(arr.slice(middle))
  return merge(left, right)
}

mergeSort([34, 12, 12, 2, 7, 9, 29, 44, 91])
