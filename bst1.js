// var util = require('util');

"use strict";

function NODE(data){
    this.data = data;
    this.left = null;
    this.right = null;
    // this.show = show;
    this.count = 1;
}

function BST(){
    this.root = null;
}

BST.prototype.add = function add(data){
    let n = new NODE(data);
    if(this.root == null){
        return this.root = n;
    }
    let current = this.root;
    // let parent = this.root;
    // determine proper location within tree
    // find the proper NODE and make connection
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
};

BST.prototype.update = function update(data){
    let grade = this.find(data);
    grade.count++;
    return grade;
};

NODE.prototype.show = function show(){
    return this.data;
};

BST.prototype.prArray = function prArray(arr){
    console.log(arr[0].toString() + ' ');
    for( var i = 1; i < arr.length; i++) {
        console.log(arr[i].toString() + ' ');
        if(i % 10 == 0){
            console.log(" ");
        }
    }
};

BST.prototype.genArray = function genArray(length) {
    var arr = [];
    for (var i = 0; i < length; i++){
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
};

BST.prototype.inOrder = function inOrder(NODE){
    if(NODE !== null){
        inOrder(NODE.left);
        console.log(NODE.show());
        inOrder(NODE.right);
    }
};

BST.prototype.postOrder = function postOrder(NODE){
    if(NODE !== null){
        postOrder(NODE.left);
        postOrder(NODE.right);
        console.log(NODE.show());
    }
};

BST.prototype.preOrder = function preOrder(NODE){
    if(NODE !== null){
        console.log(NODE.show());
        preOrder(NODE.left);
        preOrder(NODE.right);
    }
};

BST.prototype.contains = function contains(data){
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

};

BST.prototype.find = function find(data){
  let current = this.root;
    while(current.data != data){
        if(data < current.data){
            current = current.left;
        } else {
            current = current.right;
        }
        if (current == null) {
            return null;
        }
    }
    return current;
};

BST.prototype.remove = function remove(data){
    this.root && this.root.remove(data);
};

// BST.prototype.remove = function remove(data){
//     this.root = this.removeNode(this.root, data);
// };

// BST.prototype.removeNode = function removeNode(node, data){
//     if(node == null){
//         return null;
//     }
//     if(data == node.data){
//         // node has no children
//         if(node.left == null && node.right == null){
//             return null;
//         }
//         // node has no left child
//         if(node.left == null){
//             return node.right;
//         }
//         // node has no right child
//         if(node.right == null){
//             return node.left;
//         }
//         // node has two children
//         var tempNode = this.right.findMinValue();
//         console.log('did tempNode work properly?' + tempNode);
//         node.data = tempNode.data;
//         node.right = removeNode(node.right, tempNode.data);
//         return node;
//     }
//     else if (data < node.data) {
//         node.left = removeNode(node.left, data);
//         return node;
//     }
//     else {
//         node.right = removeNode(node.right, data);
//         return node;
//     }
// };

NODE.prototype.remove = function remove(data){

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
};

NODE.prototype.findMinValue = function findMinValue(){
    return this.left ? this.left.findMinValue() : this.data;
};
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
    BST: BST,
    NODE: NODE
};