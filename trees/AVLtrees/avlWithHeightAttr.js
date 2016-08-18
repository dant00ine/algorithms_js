/**
 * Created by danimagus on 8/17/16.
 */

function Node(data){
    this.data = data;
    this.right = null;
    this.left = null;
    this.height = 1;
}

function AVLTree(){
    this.root = null;
}

AVLTree.prototype.height = function(node){
    return node.height;
};

AVLTree.prototype.max = function(int1, int2){
    return (int1 > int2) ? int1 : int2;
};

AVLTree.prototype.rightRotate = function(node){

}