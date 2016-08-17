/**
 * Created by danimagus on 8/16/16.
 */
// ***************************
// **** node constructor  ****
// ***************************
function AVLNode(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

// **********************************
// **** node prototype functions ****
// **********************************
AVLNode.prototype.avl_node_height = function(node){
    let height_left = 0;
    let height_right = 0;

    if(node.left) height_left = this.avl_node_height(node.left);
    if(node.right) height_right = this.avl_node_height(node.right);

    return height_right > height_left ? ++height_right : ++height_left;

};

AVLNode.prototype.avl_balance_factor = function(node){
    let balanceFactor = 0;

    if(node.left) balanceFactor -= this.avl_node_height(node.left);
    if(node.right) balanceFactor += this.avl_node_height(node.right);

    return balanceFactor;
};

// Left Left Rotate

AVLNode.prototype.avl_rotate_leftleft = function(node){
    var a = node;
    var b = a.left;

    a.left = b.right;
    b.right = a;

    return b;
};


AVLNode.prototype.avl_rotate_rightright = function(node){
    var a = node;
    var b = node.right;

    a.right = b.left;
    b.left = a;

    return b;

};

AVLNode.prototype.avl_rotate_leftright = function(node){
    var a = node;
    var b = a.left;
    var c = b.right;

    a.left = c.right;
    b.right = c.left;
    c.left = b;
    c.right = a;

    return c;
};

AVLNode.prototype.avl_rotate_rightleft = function(node){
    var a = node;
    var b = a.right;
    var c = b.left;

    a.right = c.right;
    b.left = c.left;
    c.right = b;
    c.left = a;

    return c;

};


AVLNode.prototype.avl_balance_node = function(node){
    var newroot = null;

    // Balance children, if they exist
    if(node.left){
        node.left = this.avl_balance_node(node.left);
    }
    if(node.right){
        node.right = this.avl_balance_node(node.right);
    }

    var bf = this.avl_balance_factor(node);

    if(bf >= 2){
        // right heavy
        if(this.avl_balance_factor(node.right) <= -1){
            newroot = this.avl_rotate_rightleft(node);
        } else {
            newroot = this.avl_rotate_leftleft(node);
        }
    } else if (bf <= -2){
        // left heavy
        if(this.avl_balance_factor(node.left) >= 1 ){
            newroot = this.avl_rotate_leftright(node);
        } else {
            newroot = this.avl_rotate_rightright(node)
        }
    } else {
        // node is balanced
        newroot = node;
    }
    return newroot;
};

// traversal functions
AVLNode.prototype.dfs_traverse_node = function(node, depth){
    console.log("node depth search called");
    if(node.left) node.dfs_traverse_node(node.left, depth + 2);

    for(var i = 0; i < depth; i++){
        console.log("Node data:", node.data, node.avl_balance_factor(node));
    }

    if(node.right) node.dfs_traverse_node(node.right, depth + 2);
};



// ***************************
// **** tree constructor  ****
// ***************************
function AVLTree(){
    var root = null;
}

// **********************************
// **** tree prototype functions ****
// **********************************
AVLTree.prototype.insert = function(data){
    var n = new AVLNode(data);
    if(this.root == null){
        return this.root = n;
    }
    var current = this.root;
    var previous;

    while(current){
        previous = current;
        if(data < current.data){
            current = current.left;
        }
        else if(data > current.data){
            current = current.right;
        }
        else if(data == current.data){
            console.log("data value already present");
            return null;
        }
    }

    if(data < previous.value) previous.left = n;
    if(data > previous.value) previous.right = n;

    this.avl_balance();

};

AVLTree.prototype.remove = function remove(data){

};

AVLTree.prototype.avl_balance = function avl_balance(){
    var newroot = null;

    newroot = AVLNode.prototype.avl_balance_node(this.root);

    if(newroot !== this.root){
        this.root = newroot;
    }
};

AVLTree.prototype.height = function height(){

    return this.displayHeight(this.root)
};

AVLTree.prototype.displayHeight = function displayHeight(node){
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

AVLTree.prototype.find = function find(data){
    var current = this.root;

    while(current && current.data !== data){
        if(data > current.data)
            current = current.right;
        else
            current = current.left;
    }
    return current;
};



AVLTree.prototype.dfs_traverse_tree = function(){
    console.log("depth search called on tree");
    this.root.dfs_traverse_node(this.root, 0)
};

// TEST ZONE

var tree = new AVLTree();

for(var i = 0; i < 20; i++){
    let randomValue = Math.floor(Math.random()*100);
    console.log("random value: " + randomValue);
    tree.insert(randomValue);
}

console.log("Tree: "+tree);

tree.dfs_traverse_tree();

