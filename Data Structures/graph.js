class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
    return this.adjacencyList
  }
  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(vtx => vtx !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(vtx => vtx !== v1)
    return this.adjacencyList
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined
    while (this.adjacencyList[vertex].length) {
      let removedVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, removedVertex)
    }
    delete this.adjacencyList[vertex]
  }
  depthFirstSearchRecusive(start) {
    let list = []
    let visited = {}
    const adjacencyList = this.adjacencyList
    function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      list.push(vertex)
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    }
    dfs(start)
    return list
  }
  depthFirstSearchIterative(first) {
    let stack = [first]
    let results = []
    let visited = {}
    visited[first] = true
    while (stack.length) {
      let vertex = stack.pop()
      results.push(vertex)
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }
    return results
  }
  breathFirstSearch(vertex) {
    let queue = [vertex]
    let results = []
    let visited = {}
    visited[vertex] = true
    while (queue.length) {
      let shiftFirst = queue.shift()
      results.push(shiftFirst)
      this.adjacencyList[shiftFirst].forEach(neighbor => {
        if (!visited[neighbor]) {
          queue.push(neighbor)
          visited[neighbor] = true
        }
      })
    }
    return results
  }
}

let g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')
