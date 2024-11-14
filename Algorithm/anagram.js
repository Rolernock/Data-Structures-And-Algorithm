// Method 1 - Big O: Time complexity o(n^2); Space complexity o(n)
const validAnagram = (word1, word2) => {
  if (word1.length !== word2.length) return false
  let array1 = word1.split('')
  let array2 = word2.split('')
  for (let char of array2) {
    let correctIndex = array1.indexOf(char)
    if (correctIndex !== -1) {
      array1.splice(correctIndex, 1)
    } else {
      return false
    }
  }
  return true
}

validAnagram('azz', 'aaz')

// Method 2- Big O: Time complexity o(n); Space complexity o(n)
const validAnagram1 = (first, second) => {
  if (first.length !== second.length) return false
  const lookUp = {}
  for (let char of first) {
    lookUp[char] ? ++lookUp[char] : (lookUp[char] = 1)
  }
  for (let char2 of second) {
    if (!lookUp[char2]) {
      return false
    } else {
      lookUp[char2] -= 1
    }
  }
  return true
}

validAnagram1('anagram', 'nagaram')
