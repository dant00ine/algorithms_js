function AdjMap(){
  this.vertices = 0
  this.map = []
}

AdjMap.prototype.addVertex = function(){
    this.vertices += 1

    this.map.push([])
    for(var i = 0; i < this.vertices - 1 - i; i++)
      this.map[this.vertices-1].push(0)

    for(var i = 0; i < this.vertices; i++){
      this.map[i].push(0)
    }
}

AdjMap.prototype.removeVertex = function(){
  // holy shieeet
}

AdjMap.prototype.addEdge = function(v1, v2){

}
