/**
 * Created by danimagus on 8/12/16.
 */
//
// const bstFile = require('./bst.js');
// const BST = bstFile.BST;
// const NODE = bstFile.NODE;

// module.exports = {
//     BST: BST,
//     NODE: NODE
// };

BST.prototype.height = function height(){

    return this.displayHeight(this.root);

};

BST.prototype.displayHeight = function displayHeight(node){

    if(node == null){
        return 0;
    }

    var left = displayHeight(node.left);
    var right = displayHeight(node.right);

    if(left > right){
        return 1 + left;
    } else {
        return 1 + right;
    }
};

BST.prototype.height = function height(node){
  if(node == null){
    return 0;
  }
  return 1 + (this.height(node.left) > this.height(node.right) ? this.height(node.left) : this.height(node.right))
}

BST.prototype.isFull = function isFull(node){
  if(node == null){ return true }

  if(this.height(node.left) != this.height(node.right)){
    return false
  }

  return this.isFull(node.left) && this.isFull(node.right)
}

BST.prototype.isComplete = function isComplete(root, index=0, size){
  if(root == null){
    return true
  }
  if(index >= size){
    return false
  }
  return isComplete(root.left, 2*index + 1, size) &&
  isComplete(root.right, 2*index + 2, size)
}

BST.prototype.isValid = function isValid(node, min, max){
  if(node == null){
    return true
  }
  if( node.data <= min || node.data >= max ){
    return false
  }
  return this.isValid(node.left, min, node.data) && this.isValid(node.right, node.data, max)
}
