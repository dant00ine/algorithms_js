// var util = require('util');
// written as a module that can be exported for use in other files

"use strict";

// NODE OBJECT CONSTRUCTOR

function NODE(data){
    this.data = data;
    this.left = null;
    this.right = null;
    // this.show = show;
    // this.count = 1;
}

NODE.prototype.findMinValue = function findMinValue(){
    return this.left ? this.left.findMinValue() : this;
};

NODE.prototype.show = function show(){
    return this.data;
};

// BST CONSTRUCTOR

function BST(){
    this.root = null;
}

// BST:: // ADD // REMOVE

BST.prototype.add = function add(data){
    let n = new NODE(data);
    if(this.root == null){
        return this.root = n;
    }
    let current = this.root;

    while(current){
        if(data < current.data){
            if(current.left == null){
                return current.left = n;
            }
            current = current.left;
        }
        else if(data >= current.data){
            if(current.right == null){
                return current.right = n;
            }
            current = current.right;
        }
    }
};

BST.prototype.remove = function remove(data){
    this.root = this.removeNode(this.root, data);
};

BST.prototype.removeNode = function removeNode(node, data){
    if(node == null){
        // this means the root is null and there is no list
        return null;
    }
    if(data == node.data){
        // node has no children
        if(node.left == null && node.right == null){
            return null;
        }
        // node has no left child
        if(node.left == null){
            return node.right;
        }
        // node has no right child
        if(node.right == null){
            return node.left;
        }
        // node has two children
        var tempNode = node.right.findMinValue();
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    }
    else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    }
    else {
        node.right = removeNode(node.right, data);
        return node;
    }
};



// BST.prototype.removeWithLoop = function(key){
//   if(!root){
//     return false
//   }
//   var parent = this.root
//   var runner = this.root
//   while(runner){
//     if(key == runner.data){
//       if(!runner.left && !runner.right){
//         //no child case
//         parent.next = null
//       }
//       else if(!runner.left){
//         // one child case
//       } else {
//         // two child case
//         var minNode = runner.right.findMinValue()
//
//         runner.data = minNode.data
//
//       }
//
//
//
//     }
//
//     if(key < runner.data){
//       parent = runner
//       runner = runner.left
//     } else {
//       parent = runner
//       runner = runner.right
//     }
//   }
// }

// terser remove function below (doesn't quite work)

// BST.prototype.remove = function remove(data){
//     this.root && this.root.remove(data);
// };
// NODE.prototype.remove = function remove(data){
//
//     if( data < this.data ){
//         this.left = this.left && this.left.remove(data);
//     } else if( data > this.data ){
//         this.right = this.right && this.right.remove(data);
//     } else if( this.left && this.right ){
//         this.right = this.right.findMinValue();
//         this.right = this.right.remove(this.data);
//     } else {
//         return this.right || this.left;
//     }
//     return this;
// };

// FOR TREE OCCURRENCE

// BST:: // CONTAINS // FIND // SIZE // GET MIN/MAX // LIST

BST.prototype.contains = function contains(data){
    let current = this.root;

    while(current){
        switch(data < current.data){
            case true:
                current = current.left;
                break;
            case false:
                if(data == current.data){
                    return true
                }
                current = current.right;
                break;
        }
    }
    return false
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

BST.prototype.size = function size(){
    var count = 0;
    function traverse(node){
        if(node !== null){
            traverse(node.right);
            traverse(node.left);
        }
        if(node != null)
          count = count+1;
    }
    traverse(this.root);
    return count;
};

BST.prototype.getMax = function getMax(){
    let current = this.root;
    while(!(current.right == null)){
        current = current.right;
    }
    return current.data;
};

BST.prototype.getMin = function getMin(){
    let current = this.root;
    while(!(current.left == null)){
        current = current.left;
    }
    return current.data;
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
