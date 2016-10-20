/**
 * Created by danimagus on 8/11/16.
 */
'use strict';

SList.prototype.bubbleSort = function bubbleSort(){
    var outerRunner = this.head;
    var innerRunner = this.head;

    if(this.head == null){
        return null
    }

    if(this.head.next == null){
        return true
    }

    while(outerRunner){
        innerRunner = this.head;
        while(innerRunner.next){
            if(innerRunner.data > innerRunner.next.data){
                let temp = innerRunner.data;
                innerRunner.data = innerRunner.next.data;
                innerRunner.next.data = temp;
            }
            innerRunner = innerRunner.next;
        }
        outerRunner = outerRunner.next;
    }

    return true;
};

SList.prototype.reverse = function reverse(){
    var current = this.head;
    var prev = null;

    while(current){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    this.head = prev;
    return true;
};

SList.prototype.mergeSort = function mergeSort(head){

    console.log("head this time around " + head.data);

    if(head == null || head.next == null){
        // console.log('mergeSort edge trigger');
        return head;
    }

    let middle = SList.prototype.getMiddle(head);
    let secondHalf = middle.next;
    middle.next = null;

    console.log('about to return with these halves' + head.data, secondHalf.data);
    return SList.prototype.merge(mergeSort(head), mergeSort(secondHalf));
};

SList.prototype.merge = function merge(left, right){

    var dummyHead = new NODE();
    var current = dummyHead;

    while(left !== null && right !== null){
        if(left.data <= right.data){
            // merge left value into list, increment left
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }
    current.next = (left == null) ? right : left;

    return dummyHead.next;
};

SList.prototype.getMiddle = function getMiddle(head){
    var fast = head;
    var slow = head;

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

SList.prototype.selectionSort = function selectionSort(){

  var outer = this.head;
  var inner = this.head;
  var innerPrev = null;

  while(outer){
    inner = outer;
    var min = outer;
    while(inner){
      // iterate through to find minimum value
      if(inner.data < min.data){
        min = inner;
      }
      innerPrev = inner;
      inner = inner.next;
    }
    // switch data values, bringing minimum to the current selection
    let temp = outer.data;
    outer.data = min.data;
    min.data = temp;

    outer = outer.next;
  }

 return this;
};

SList.prototype.pairSwap = function(){
    if(this.head == null || this.head.next == null){
      return;
    }
    // the edge case for the first pair is managed here
    // without making a swap, we prepare the pointers
    var previous = this.head;
    var current = this.head.next;

    this.head = current;

    while(true){
      var next = current.next;
      current.next = previous;

      if(next == null || next.next == null){
        previous.next = next;
        break;
      }

      previous.next = next.next;

      previous = next;
      current = previous.next;
    }
};
