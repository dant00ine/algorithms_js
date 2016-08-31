
'use strict';

// module.exports = {
//     NODE: NODE,
//     SList: SList
// };

function NODE(data){
    this.data = data;
    this.next = null;
}

function SList(){
    this.head = null;
}

SList.prototype.show = function show(){
    if(!this.head){
      return null;
    }
    var current = this.head.next;
    var listString = "Head => " + this.head.data;
    while(current){
        listString += ", "+current.data;
        current = current.next;
    }
    console.log(listString);
};


SList.prototype.length = function length(){
    let current = this.head;
    let count = 0;
    if(this.head == null){
        return count;
    }
    while(current){
        count++;
        current = current.next;
    }
    return count;
};

SList.prototype.addFirst = function addFirst(data){
    let n = new NODE(data);
    if(!this.head){
        return this.head = n;
    }
    let temp = this.head;
    this.head = n;
    n.next = temp;
};

SList.prototype.add = function add(data){
    let n = new NODE(data);
    if(this.head == null){
        // this.length++
        return this.head = n;
    }
    let current = this.head;
    while(current.next !== null){
        current = current.next;
    }
    return current.next = n;
    // this.length++;
};

SList.prototype.popBack = function popBack(){

    if(!this.head){ return null; }
    var returnVal;

    if(!this.head.next){
        returnVal = this.head.data;
        this.head = null;
        return returnVal;
    }

    var runner = this.head;

    while(runner.next.next)
    { runner = runner.next; }

    returnVal = runner.next.data;
    runner.next = null;
    return returnVal;
};

SList.prototype.removeFront = function(){
  var temp = this.head;
    if(!temp.next){
      this.head = null;
      return temp.data;
    }
    this.head = temp.next;
    return temp.data;
};

SList.prototype.front = function(){
  if(this.head == null){
    return null
  }
  return this.head.data;
};

SList.prototype.contains = function contains(data){
    if(this.head == null){
        return null;
    }
    let current = this.head;
    while(current){
        if(current.data == data){
            return current.data;
        }
        current = current.next;
    }
    return false;
};
