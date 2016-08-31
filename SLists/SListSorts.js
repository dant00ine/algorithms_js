/**
 * Created by danimagus on 8/11/16.
 */
'use strict';
// const SListFile = require('../SLists/SList.js');
// var SList = SListFile.SList;
// var NODE = SListFile.NODE;
//
// module.exports = {
//     NODE: NODE,
//     SList: SList
// };

SList.prototype.bubbleSort = function bubbleSort(){
    var outerRunner = this.zhead;
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

    //iterate through list and find smallest element
    var smallest = this.head;
    var smallestPrev = null;

    var outCurrent = this.head;
    var outPrev = null;

    var inCurrent = this.head;
    var inPrev = null;


    while(outCurrent){
        while(inCurrent) {
            // inner loop cycles through list comparing
            // remaining nodes with outCurrent iteration
            if (inCurrent.data < smallest.data) {
                // declare new smallest node
                smallest = inCurrent;
                smallestPrev = inPrev;
            }
            // ++++ iterate INNER loop ++++
            inPrev = inCurrent;
            inCurrent = inCurrent.next;
        } // end inner loop
        // swap smallest node with outCurrent
        // pointers to and from nodes must be updated
        if(outPrev){
            //
            smallest.next = outPrev.next;
            outPrev.next = smallest;

        } else {
            // situate the smallest as the new head
            smallest.next = this.head;
            this.head = smallest;
        }
        // inPrev.next = temp;
        outCurrent.next = smallestPrev.next.next;
        smallestPrev.next = outCurrent;

        // +++++ iterate OUTER loop +++++
        console.log("end of outer loop");
        console.log("smallest:" + smallest.data);
        console.log("outCurrent:" + outCurrent.data);
        outPrev = smallest;
        outCurrent = smallest.next;
        console.log("outCurrent = smallest.next " + outCurrent.data);
        console.log("smallest.next.data: " + smallest.next.data);
    } // end outer loop

};

// SList.prototype.pairSwap = function(){
//     // implement using the previous pointer
//     var current = this.head;
//     var previous = this.head;
//     var temp;
//
//     while(current){
//
//         if(current.data == this.head.data){
//             this.head = current.next;
//         }
//
//         if(current.next){
//             temp = current.next.next;
//             current.next.next = current;
//         } else {
//             temp = null;
//         }
//         previous = current;
//         // iterate to next pair
//         current = temp;
//       }
//     // }
//     console.log("this" + this);
//     this.show();
//     return this;
// };

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

// let list1 = new SList();
// let list2 = new SList();
// let list3 = new SList();
//
// list3.add(1);
//
// list2.add(5);
// list2.add(2);
//
// list1.add(6);
// list1.add(7);
// list1.add(1);
// list1.add(2);
// list1.addFirst(3);
// // list1.bubbleSort();
// // list1.reverse();
// console.log("list head: "+list1.head.data);
// list1.show();
//
// list1.pairSwap();
// list1.show();
