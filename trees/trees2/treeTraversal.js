

BST.prototype.breadthFirstTraversal = function(){

    var queue = []
    let node = this.root
    queue.push(node)

    while(node){

        let node = queue.shift()

        if(!node){ return true }
        console.log(`currently at: ${node.data}`);

        if(node.left){ queue.push(node.left) }
        if(node.right){ queue.push(node.right) }
    }

}


// TODO: FIX THIS BROKEN ALGORITHM
BST.prototype.depthFirstTraversal = function(){

    var stack = []
    let node = this.root
    stack.push(node)

    while(node){
        let node = stack.pop()

        if(!node){ continue }
        console.log(`currently at: ${node.data}`);

        if(node.left){
            console.log("going left");
            stack.push(node.left) }
            continue
        if(node.right){
            console.log("going right");
            stack.push(node.right) }
            continue
    }

}

BST.prototype.depthFirstTraversal = function(node, callback){
    callback = callback || function(node){ console.log(`currently at: ${node.data}`) }
    // currently configured to console log from smallest
    // value to highest
    if(node.left){ this.depthFirstTraversal(node.left, callback) }
    callback(node)
    if(node.right){ this.depthFirstTraversal(node.right, callback) }

}


// TODO: figure out why this isn't working
BST.prototype.toSortedArray = function(){
    var array = []
    this.depthFirstTraversal(this.root, function(node){
        array.push(node.data)
    })
    return array
}

BST.prototype.reverseTree = function(node){
    if(!node){ return }

    let tempTree = node.right
    node.right = node.left
    node.left = tempTree

    reverseTree(node.left)
    reverseTree(node.right)
}
