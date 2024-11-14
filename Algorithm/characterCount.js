// Method 1 - Time complexity o(n); Space complexity o(n)

const charCount = str => {
  const newStr = str
    .toLowerCase()
    .replace(/\s/g, '')
    .replace(/[^a-z0-9]/g, '')
  let result = {}
  for (let char of newStr) {
    result[char] ? ++result[char] : (result[char] = 1)
  }
  return result
}

charCount('Rolernock! is, s')
