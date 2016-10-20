
'use strict';

// module.exports = {
//     NODE: NODE,
//     SList: SList
// };

function NODE(key, data){
    this.key = key;
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

SList.prototype.find = function(key){
  if(!this.head){
    return null
  }
  var current = this.head
  while(current){
    if (current.key == key){
      return current
    }
    current = current.next
  }
  return false
}


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

SList.prototype.addFirst = function addFirst(key, data){
    let n = new NODE(key, data);
    if(!this.head){
        return this.head = n;
    }
    let temp = this.head;
    this.head = n;
    n.next = temp;
};

SList.prototype.add = function add(key, data){
    let n = new NODE(key, data);
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

SList.prototype.isEmpty = function(){
  if(this.head == null){
    return true
  } else {
    return false
  }
}

SList.prototype.remove = function(key){
  if(this.head == null){
    return null
  }
  var current = this.head
  var previous = this.head
  while(current){
    if(current.key == key ){
      if(current == this.head){
        this.head = current.next
        current.next = null
        return current.data
      }
      previous.next = current.next
      current.next = null
      return current.data
    }
    previous = current
    current = current.next
  }
  return false
}
