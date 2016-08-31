'use strict';

SList.prototype.max = function(){
  var max = this.head;
  var current = this.head;

  while(current){
    if(current.data > max.data){
      max = current;
    }
    current = current.next
  }
  return max;
};

SList.prototype.minToFront = function(){
    var min, current, prev;
    min = current = prev = this.head;
    var minPrev;
    while(current){
      if(current.data < min.data){
        min = current;
        minPrev = prev;
      }
      prev = current;
      current = current.next;
    }
    if(!minPrev){
      return this;
    }
    minPrev.next = min.next
    min.next = this.head;
    this.head = min;

    return this;
};

SList.prototype.maxToBack = function(){
    if(this.head == null){
      return this;
    }
    var max, current, prev;
    max = current = prev = this.head;
    var maxPrev;
    while(current.next){
      if(current.data > max.data){
        maxPrev = prev;
        max = current;
      }
      prev = current;
      current = current.next;
    }
    if(!maxPrev){
      return this;
    }
    maxPrev.next = max.next;
    max.next = null;
    current.next = max;

    return this;
};

SList.prototype.splitOnVal = function(val){
    //empty list case
    if(this.head == null){
      return null;
    }
    // two runners are needed, because we will need
    // to set the new tail of list1 to null, and if
    // we base our while loop on current.next, we will
    // get errors around current not having a next prop
    var list2 = new SList();
    var current, previous;
    current = previous = this.head;

    //one node case
    if(this.head.next == null){
      list2.head = current;
      this.head = null;
      return list2;
    }
    // loop through until we find value
    while(current){
      if(current.data == val){
        break;
      }
      previous = current;
      current = current.next;
    }
    // set tail of list1, set head of list2
    previous.next = null;
    list2.head = current;

    return list2;
};

SList.prototype.removeNegatives = function(){
  var current, previous;
  current = previous = this.head;

  while(current){
    if(current.data < 0){
      if(current == this.head){
        this.head = current.next;
      } else {
        previous.next = current.next;
        current = previous.next;
        continue;
      }
    }
    previous = current;
    current = current.next;
  }
  return this;
};
