// var util = require('util');

"use strict";

function node(data){
    this.data = data;
    this.left = null;
    this.right = null;
    // this.show = show;
}

function bst(){
    this.root = null;
}

bst.prototype.add = function add(data){
    let n = new node(data);
    if(this.root == null){
        return this.root = n;
    }
    let current = this.root;
    // let parent = this.root;
    // determine proper location within tree
    // find the proper node and make connection
    while(current){
        if(data <= current.data){
            if(current.left == null){
                return current.left = n;
            }
            current = current.left;
        }
        else if(data > current.data){
            if(current.right == null){
                return current.right = n;
            }
            current = current.right;
        }
    }
}

node.prototype.show = function show(){
    return this.data;
}

bst.prototype.inOrder = function inOrder(node){
    if(node !== null){
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}

bst.prototype.postOrder = function postOrder(node){
    if(node !== null){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}

bst.prototype.preOrder = function preOrder(node){
    if(node !== null){
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}

bst.prototype.contains = function contains(data){
    let current = this.root;
    console.log("data: " + data);
    // console.log("current: " + this.root.data)
    // console.log("successfully entered function context");
    while(current){
        switch(data < current.data){
            case true:
                current = current.left;
                break;
            case false:
                if(data == current.data){
                    return console.log("BST contains value");
                }
                current = current.right;
                break;
        }
    }

    return console.log("BST does not contain value");

}
//
bst.prototype.remove = function remove(data){
    this.root && this.root.remove(data);
}

node.prototype.remove = function remove(data){
    if( data < this.data ){
        this.left = this.left && this.left.remove(data);
    } else if( data > this.data ){
        this.right = this.right && this.right.remove(data);
    } else if( this.left && this.right ){
        this.right = this.right.findMinValue();
        this.right = this.right.remove(this.data);
    } else {
        return this.right || this.left;
    }
    return this;
}

node.prototype.findMinValue = function findMinValue(){
    return this.left ? this.left.findMinValue() : this.data;
}
//
// function size(){
//
// }
//
// function toArray(){
//
// }
//
// function toString(){
//
// }
module.exports = {
    bst: bst,
    node: node
}