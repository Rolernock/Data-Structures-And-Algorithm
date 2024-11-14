// Big O - Insertion, deletion, access: o(1)

class HashTable {
  constructor(size = 4) {
    this.keyMap = Array.from({ length: size }, () => [])
  }
  _hash(key) {
    let total = 0
    let PRIME_NUMBER = 51
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * PRIME_NUMBER + value) % this.keyMap.length
    }
    return total
  }
  set(key, val) {
    let idx = this._hash(key)
    this.keyMap[idx].push([key, val])
  }
  get(key) {
    let idx = this._hash(key)
    if (this.keyMap[idx].length === 0) return undefined
    for (let i = 0; i < this.keyMap[idx].length; i++) {
      let [storedKey, storedVal] = this.keyMap[idx][i]
      if (storedKey === key) {
        return storedVal
      }
    }
    return undefined
  }
  keys() {
    let keysSet = new Set()
    for (let bucket of this.keyMap) {
      for (let [keys] of bucket) {
        keysSet.add(keys)
      }
    }
    return Array.from(keysSet)
  }
  values() {
    let valuesSet = new Set()
    for (let bucket of this.keyMap) {
      for (let [, values] of bucket) {
        valuesSet.add(values)
      }
    }
    return Array.from(valuesSet)
  }
}

let h = new HashTable()
h.set('roler', 'nock')
h.set('pillow', 'case')
h.set('jonnie', 'junnier')
h.set('jackie', 'chan')
