function AdjList(){
  this.vertices = {}
}

function AdjListNode(key){
  this.key = key
  this.conn = {}
  this.visited = 0
}

AdjList.prototype.addVertex = function(key){
  if(this.vertices[key]){
    return false
  }
  var n = new AdjListNode(key)
  this.vertices[key] = n
}

AdjList.prototype.addEdge = function(key1, key2, weight){
  this.vertices[key1].conn[key2] = weight
}

var graph1 = new AdjList()
graph1.addVertex("A")
graph1.addVertex("B")
graph1.addVertex("C")
graph1.addVertex("D")

graph1.addEdge("A", "B", 2)

console.log(graph1)
console.log(graph1.vertices["A"].conn);

function Stack(){

}

AdjList.prototype.DFSPath = function(v1, v2){

}

AdjList.prototype.BFSPath = function(v1, v2){

}
