function Queue(){
    var head = null;
    var tail = null;
}

function qNode(val){
    this.val = val;
    this.next = null;
}

Queue.prototype.enqueue = function(val){
    var node = new qNode(val);
    if (!this.head){
        this.head = node;
        this.tail = this.head;
        return true;
    }
    this.tail.next = node;
    this.tail = node;
    return true;
}
Queue.prototype.dequeue = function(node) {
    var temp = this.head;
    if (this.head){
        this.head = this.head.next;
        if (this.head === this.tail){
            // one item or is null
            this.tail = null;
        }
    }
    this.length -= 1;
    return temp;
}
// console.log(new Queue());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function pathExists(node1, node2) {
    var q = new Queue();
    q.enqueue(node1);
    // console.log(q)
    while(q.head){
        var curr = q.dequeue();
        // console.log('curr', curr)
        for (var idx in curr.val.cnx) {
            if (curr.val.cnx[idx] === node2){
                return true;
            } else {
                if (!curr.val.cnx[idx].status){
                    curr.val.cnx[idx].status = 1;
                    q.enqueue(curr.val.cnx[idx]);
                }
            }
        }
    }
    return false;
}


function GraphNode(name){
    this.name = name;
    this.conn = [];
    this.status = 0;
}
GraphNode.prototype.addConn = function(args){
    console.log(args);
    for (var node in args){
        this.conn.push(node);
    }
    return this;
}

function Graph(){
    this.vertices = []
    this.print = function(){
        return this.vertices;
    }
    return this;
}
Graph.prototype.addNode = function(node){
    this.vertices.push(node);
    return this;
}



var graph = new Graph();
var wa = new GraphNode('WA');
var or = new GraphNode('OR');
var id = new GraphNode('ID');
or.addConn(wa, id);
wa.addConn(or, id);
id.addConn(or, wa)
graph.addNode(wa);
graph.addNode(or);
graph.addNode(id);



console.log((graph.print()))

// console.log( "path exists:", pathExists(node, node4))
