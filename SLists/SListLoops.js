SList.prototype.reverse = function(){

  var current = this.head;
  var prev = null;

  while(current){
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  this.head = prev;
  return this;
}
