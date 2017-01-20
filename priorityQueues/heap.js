function Heap(){
  var main = [0]

  this.show = function(){
    console.log(main)
  }

  this.enqueue = function(val){
    main.push(val)
    repairUp()
  }

  this.dequeue = function(){
   if(main[1] != undefined){
     [main[1], main[main.length-1]] = [main[main.length-1], main[1]]
     let returnValue = main.pop()
     repairDown()
     return returnValue
   }
   return undefined
 }

  function repairUp(){
    var child = main.length - 1
    var parent = Math.floor(child/2)
    while(parent != 0 && main[parent] > main[child]){
      [main[parent], main[child]]=[main[child], main[parent]];
      child = parent;
      parent = Math.floor(child/2)
    }
  }

  function repairDown(){
    var idx = 1
    var minChild = 0
    while(idx*2 < main.length){
      // perform operation until leaf node is reached
      if(!main[idx*2+1]){
        // One child case
        minChild = idx*2
        [main[idx], main[minChild]] = [main[minChild], main[idx]]
      } else {
        // determine smaller child and make swap
        if(main[idx*2+1] < main[idx*2]){
          minChild = idx*2+1
          [main[idx], main[minChild]] = [main[minChild], main[idx]]
        } else {
          minChild = idx*2
          [main[idx], main[minChild]] = [main[minChild], main[idx]]
        }
      }
      minChild = idx
    }
  }

} // end of heap
