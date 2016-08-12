
'use strict';

module.exports = {
    NODE: NODE,
    SList: SList
};

function NODE(data){
    this.data = data;
    this.next = null;
}

function SList(){
    this.head = null;
}

SList.prototype.show = function show(){
    let current = this.head;

    while(current){
        console.log(current.data);
        current = current.next;
    }
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
        return this.head = n;
    }
    let current = this.head;
    while(current.next !== null){
        current = current.next;
    }
    current.next = n;
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