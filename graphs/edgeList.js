function EdgeList(){
  this.vertices = []
  this.edges = []
}

EdgeList.prototype.addVertex = function(key){

  if(this.vertices.includes(key))
    return false

  this.vertices.push(key)
}

EdgeList.prototype.removeVertex = function(key){
  // remove value from array
  for(var i = 0; i < this.vertices.length; i++){
    if(this.vertices[i] == key){
      for(var j = i; j < this.vertices.length; j++){
        this.vertices[j] = this.vertices[j + 1]
      }
      this.vertices.length -= 1
      return true
    }
  }
  return false
}

EdgeList.prototype.show = function(){
  for(var i = 0; i < this.vertices.length; i++){
    console.log(this.vertices[i])
  }
  for(var i = 0; i < this.edges.length; i++){
    console.log(this.edges[i])
  }
}

EdgeList.prototype.addEdge = function(key1, key2, weight){
  weight = weight || 1
  if(locateEdge(key1, key2, weight)) return false
  this.edges.push([key1, key2, weight])
}

EdgeList.prototype.removeEdge = function(key1, key2, weight){
  var idx = locateEdge(key1, key2, weight)
  if(idx){
    for(var i = idx; i < this.edges.length; i++){
      this.edges[i] = this.edges[i + 1]
    }
    this.edges.length -= 1
    return true
  }
  return false
}

EdgeList.prototype.locateEdge = function(key1, key2, weight){
  for(var i = 0; i < this.edges.length; i++){
    var c = this.edges[i]
    if(c[0] == key1 && c[1] == key2 && c[2] == weight){
      return i
    }
  }
  return false
}
