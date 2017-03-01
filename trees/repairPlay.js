BST.prototype.findInvalidNode = function findInvalidNode(node, invalidNode, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY){
  invalidNode ? invalidNode : invalidNode = {node: null}
  // invalidNode.node = null;
  if(node == null){
    return false
  }

  if(min >= node.data || max <= node.data){
    invalidNode.node = node
  }
  this.findInvalidNode(node.left, invalidNode, node.data, max)
  this.findInvalidNode(node.right, invalidNode, min, node.data)
  return invalidNode.node
}

BST.prototype.repair = function repair(){

  while(this.findInvalidNode(this.root)){
    this.add(this.removeNode(this.findInvalidNode(this.root)))
  }

  console.log("Finished");

}
