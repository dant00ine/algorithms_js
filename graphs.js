function Vertex(label){
    this.label = label;
}

function Graph(v){
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i=0; i < this.vertices; ++i){
        this.adj[i] = [];
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.marked = [];
    for(var q = 0; q < this.vertices; ++q){
        this.marked[q] = false;
    }
}

function addEdge(v,w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for(var i = 0; i < this.vertices; ++i) {
        console.log(i + " -> ");
        for(var j =0; j < this.vertices; ++j) {
            if(this.adj[i][j] !== undefined){
                console.log(this.adj[i][j]);
            }
        }
    }
}

function dfs(v){
    this.marked[v] = true;
    if(this.adj[v] !== undefined){
        console.log("Visited vertex: " + v);
    }
    for(var w = 0; w < this.adj[v].length; w++){
        if(!this.marked[this.adj[v][w]]){
            this.dfs(this.adj[v][w]);
        }
    }
}

function bfs(s){
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while(queue.length > 0){
        var v = queue.shift(); // remove from front of queue
        console.log("this is v: "+ v);
        if(v === undefined) {
            console.log("Visited vertex: " + v);
        }
        for(var w=0; w < this.adj[v].length;++w){
            if(!this.marked[this.adj[v][w]]){
                this.edgeTo[this.adj[v][w]] = v;
                this.marked[this.adj[v][w]] = true;
                queue.push(this.adj[v][w]);
            }
        }
    }
}

g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
console.log(g.marked);
g.bfs(0);