/**
 * Created by danimagus on 8/18/16.
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
    if(node == null){
        return 0;
    }
    return node.height;
};

AVLTree.prototype.max = function(int1, int2){
    return (int1 > int2) ? int1 : int2;
};

AVLTree.prototype.rightRotate = function(node){
    var x = node.left;
    var T2 = x.right;

    x.right = node;
    node.left = T2;

    node.height = this.max(this.height(node.left), this.height(node.right)) + 1;
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;

    return x;
};

AVLTree.prototype.leftRotate = function(node){
    var x = node.right;
    var T2 = x.left;

    x.left = node;
    node.right = T2;

    node.height = this.max(this.height(node.left), this.height(node.right)) + 1;
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;

    return x;
};

AVLTree.prototype.getBalance = function(node){
    if(node == null){
        return 0;
    }
    return this.height(node.right) - this.height(node.left);
};

AVLTree.prototype.isBalanced = function(node){
    var balance = this.getBalance(node);
    if(balance > 1 || balance < -1){
        console.log("Node " + node.data + "is imbalanced by factor of: " + balance);
        return false;
    } else {
        if(node.left){
            this.isBalanced(node.left);
        }
        if(node.right){
            this.isBalanced(node.right);
        }
    }
    return true;
};

AVLTree.prototype.insert = function(node, data){
    // two parameters, one is the node to fasten to,
    // and the data to serve as the new node's key
    if(node == null){
        return new Node(data);
    }
    if(data < node.data){
        node.left = this.insert(node.left, data);
    } else {
        node.right = this.insert(node.right, data);
    }

    // update the height (as recursion unravels)
    node.height = this.max(this.height(node.left), this.height(node.right)) + 1;

    // get the balance factor of this ancestor node to check
    // whether the node has become imbalanced
    var balance = this.getBalance(node);

    // left left case
    if(balance < -1 && data < node.left.data){
        return this.rightRotate(node);
    }

    // left right case
    if(balance < -1 && data > node.left.data){
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
    }
    // right right case
    if(balance > 1 && data > node.right.data){
        return this.leftRotate(node);
    }

    // right left case
    if(balance > 1 && data < node.right.data){
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
    }

    return node;
};

AVLTree.prototype.minValueNode = function(node){
    var current = node;

    while(current.left !== null){
        current = current.left;
    }

    return current;
};

AVLTree.prototype.deleteNode = function(node, data){

    // Standard BST delete
    if(this.root == null){
        return this.root;
    }

    if(data < node.data){
        node.left = this.deleteNode(node.left, data);
    }
    else if (data > node.data){
        node.right = this.deleteNode(node.right, data);
    }

    // we're here, at the node to be deleted
    else {
        // node with only one child or no child
        // use temporary variable to store extant node
        if(node.left == null || node.right == null){
            var temp = null;
            if(temp == node.left){
                temp = node.right;
            } else {
                temp = node.left;
            }

            // if temp is still null, it's the no child case
            if(temp == null){
                temp = node;
                node = null;
            } else {
                // one child case
                node = temp;
            }
        } else {
            // node with two children, get the inorder successor,
            // which is the smallest node in the right subtree

            temp = this.minValueNode(node.right);
            node.data = temp.data;
            node.right = this.deleteNode(node.right, data);
        }

    }
    // no child case, return null (the previous step in the recursion
    // will set either the left or right pointer to null, effectively
    // deleting the node with data that was originally entered
    if(node == null){
        return node;
    }

    node.height = this.max(this.height(node.left), this.height(node.right)) +1;

    var balance = this.getBalance(node);

    // four cases of imbalance -- the insert function knows which case based on
    // where the node will be inserted (to the left after a leftwards imbalance
    // for example, leads to a 'left left'

    // in this case though, we have to call the getBalance function on the child
    // to determine which direction the imbalance lies

    // left left case
    if(balance < -1 && this.getBalance(node.left) <= 0){
        console.log("left left rotation");
        return this.rightRotate(node);
    }

    // left right case
    if(balance < -1 && this.getBalance(node.left) >= 0){
        console.log("left right rotation");
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
    }

    // right right case
    if(balance > 1 && this.getBalance(node.right) >= 0){
        console.log("right right rotation");
        return this.leftRotate(node);
    }

    // right left case
    if(balance > 1 && this.getBalance(node.right) <= 0){
        console.log("right left rotation");
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
    }

    return node;
};

AVLTree.prototype.preOrder = function(node){
    if(node!== null){
        console.log("Node " + node.data + " at height: " + node.height);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
};

var tree1 = new AVLTree();

for(var i = 0; i < 20; i++){
    var randomKey = Math.floor(Math.random() * 100 + 1);
    if(i == 10){
        var keyForDelete = randomKey;
        console.log("key for delete: " + keyForDelete);
    }
    tree1.root = tree1.insert(tree1.root, randomKey);
}

tree1.deleteNode(tree1.root, keyForDelete);

tree1.preOrder(tree1.root);