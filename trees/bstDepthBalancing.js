/**
 * Created by danimagus on 8/12/16.
 */

const bstFile = require('./bst.js');
const BST = bstFile.BST;
const NODE = bstFile.NODE;

module.exports = {
    BST: BST,
    NODE: NODE
};

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