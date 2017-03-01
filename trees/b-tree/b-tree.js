function BTreeNode(t, leaf){
  this.t = t
  this.leaf = leaf
  this.keys = []
  this.children = []
}

function BTree(t){
  this.t = t
  this.root = null

  this.traverse = function(){
    if(root != null){
      traverse(root)
    }
  }

  this.search = function(key){
    return root == null ? null : root.search(key)
  }
}

// Function to search key k in subtree rooted with this node
BTreeNode.prototype.search = function(key){
  var i = 0;
  while(i < this.keys.length && key > this.keys[i]){
    i++
    if(this.keys[i] == key) return this
    if(this.leaf == true) return null
    return this.children[i].search(key)
  }
}

// Function to traverse all nodes in a subtree rooted with this node
BTreeNode.prototype.traverse = function(){
  for(i = 0; i < this.keys.length; i++){
    console.log(this.keys[i]);
  }
  if(this.leaf == false){
    for(i=0; i< this.children.length; i++)
    this.children[i].traverse()
  }
}

// the main function that inserts a new node into this btree
BTree.prototype.insert = function(key){
  // If tree is empty
    if (this.root == null){
        // Allocate memory for root
        this.root = new BTreeNode(this.t, true);
        this.root.keys[0] = key // Insert key
    } else {  // If tree is not empty
          // If root is full, then tree grows in height
          if (this.root.keys.length == 2*this.t-1){
              // Allocate memory for new root
              var node = new BTreeNode(this.t, false);

              // Make old root as child of new root
              node.children[0] = this.root;
              // Split the old root and move 1 key to the new root
              node.splitChild(0, this.root);
              // New root has two children now.  Decide which of the
              // two children is going to have new key
              var i = 0;
              if (node.keys[0] < key){
                i++;
              }
              node.children[i].insertNonFull(key);
              // Change root
              this.root = node;
          } else { // If root is not full, call insertNonFull for root
              this.root.insertNonFull(key);
          }
      }
}

// A utility function to insert a new key in the subtree rooted with
// this node. The assumption is, the node must be non-full when this
// function is called
BTreeNode.prototype.insertNonFull = function(key){
  // Initialize index as index of rightmost element
    var i = this.keys.length - 1;
    // If this is a leaf node
    if (this.leaf == true){
        // The following loop does two things
        // a) Finds the location of new key to be inserted
        // b) Moves all greater keys to one place ahead
        while (i >= 0 && this.keys[i] > key){
            this.keys[i+1] = this.keys[i];
            i--;
        }
        // Insert the new key at found location
        this.keys[i+1] = key;
    }
    else{ // If this node is not leaf
        // Find the child which is going to have the new key
        while (i >= 0 && this.keys[i] > key)
          i--
        // See if the found child is full
        if (this.children[i+1].keys.length == 2*this.t-1){
            // If the child is full, then split it
            this.splitChild(i+1, this.children[i+1]);
            // After split, the middle key of C[i] goes up and
            // C[i] is split into two.  See which of the two
            // is going to have the new key
            if (this.keys[i+1] < key)
                i++;
        }
        this.children[i+1].insertNonFull(key);
    }
}

// A utility function to split a child of this node. i is index of child in
// child array C[].  The Child must be full when this function is called
BTreeNode.prototype.splitChild = function(i, child){
  // Create a new node which is going to store (t-1) keys
    var node = new BTreeNode(child.t, child.leaf);
    // Copy the last (t-1) keys of child to node
    for (var j = 0; j < this.t-1; j++)
        node.keys[j] = child.keys[j+this.t];
    // Copy the last t children of child to node
    if (child.leaf == false){
        for (var j = 0; j < this.t; j++)
            node.children[j] = child.children[j+this.t];
    }
    // Since this node is going to have a new child,
    // create space of new child
    for (var j = this.keys.length; j >= i+1; j--){
      this.children[j+1] = this.children[j];
    }
    // Link the new child to this node
    this.children[i+1] = node;
    // A key of child will move to this node. Find location of
    // new key and move all greater keys one space ahead
    for (var j = this.n-1; j >= i; j--){
      this.keys[j+1] = this.keys[j];
    }
    // Copy the middle key of y to this node
    this.keys[i] = child.keys[this.t-1];
    // remove duplicated keys from child
    child.keys.splice(0, this.t-2);
    // Increment count of keys in this node
    this.n = this.n + 1;
}
