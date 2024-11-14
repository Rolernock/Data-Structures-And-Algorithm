// Method 1 - Time complexity o(n); Space complexity o(n)

const countUniqueValues = arr => {
  const unique = {}
  for (let num of arr) {
    unique[num] ? ++unique[num] : (unique[num] = 1)
  }
  const keysObj = Object.keys(unique)
  return keysObj.length
}

countUniqueValues([-2, -1, -1, 0, 1])

// Method 2 - Time complexity o(n); Space complexity o(1)
const countUniqueValues1 = arr => {
  let first = 0
  if (arr.length === 0) return 0
  for (let second = 1; second < arr.length; second++) {
    if (arr[first] !== arr[second]) {
      first++
      arr[first] = arr[second]
    }
  }
  return first + 1
}

countUniqueValues1([-2, -1, -1, 0, 1])
