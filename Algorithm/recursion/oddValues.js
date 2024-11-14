// Method 1 - Time complexity o(n); space complexity o(n)

const collectOddValues = arr => {
  let oddValues = []
  if (arr.length === 0) return oddValues
  if (arr[0] % 2 !== 0) {
    oddValues.push(arr[0])
  }
  oddValues = oddValues.concat(collectOddValues(arr.slice(1)))
  return oddValues
}
collectOddValues([1, 3, 4, 5, 6, 7, 8, 9])
