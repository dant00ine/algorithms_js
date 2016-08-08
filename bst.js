// define BST and Node classes
function Node(data, left, right){
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;
    this.show = show;
}

function BST(){
    this.root = null;
    this.insert = insert;
    this.update = update;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
}

// show function will be used to return data
function show(){
    return this.data;
}

// insert function will
// add node at proper location
function insert(data){
    var n = new Node(data, null, null);
    // edge case
    if(this.root == null){
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while(true){
            parent = current;
            if(data < current.data) {
                current = current.left;
                if(current == null){
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if(current == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function update(data){
    var grade = this.find(data);
    grade.count++;
    return grade;
}

function prArray(arr){
    console.log(arr[0].toString() + ' ');
    for(var i = 1; i < arr.length; ++i){
        console.log(arr[i].toString() + ' ');
        if(i % 10 == 0){
            console.log('\n')
        }
    }
}

function inOrder(node){
    if(node !== null) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

function preOrder(node){
    if(node !== null) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node){
    if(node !== null){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
    }
}


// ******* testing zone ******* //
var busty = new BST();
busty.insert(16);
busty.insert(22);
busty.insert(41);
busty.insert(-16);
busty.insert(-2);
busty.insert(101);
busty.insert(5);
console.log("the root:", busty.root);
inOrder(busty.root);
console.log("pre:");
preOrder(busty.root);
console.log("post:");
postOrder(busty.root);