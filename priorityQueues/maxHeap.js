function randomArray(){
  var returnArr = []
  for (var i = 0; i < 20; i++) {
    const randomValue = Math.floor(1+ Math.random(100))
    returnArr.push(randomValue)
  }
  return returnArr
}

var randomArray = randomArray()
console.log(randomArray);

function maxHeap(){
  var main = []

  this.show = function(){
    console.log(main);
  }

  this.enqueue = function(val){
    main.push(val)
    repairUp()
  }

  this.dequeue = function(){
    if(main[0] != undefined){
      [main[0], main[main.length-1]] = [main[main.length-1], main[1]]
      let returnValue = main.pop()
      repairDown()
      return returnValue
    }
    return undefined
  }

  function repairUp(){
    var child = main.length - 1
    var parent = Math.floor((child-1)/2)
    while(parent > -1 && main[parent] < main[child]){
      [main[parent], main[child]] = [main[child], main[parent]]
      child = parent
      parent = Math.foor((child-1)/2)
    }
  }

  function repairDown(bound){
    var idx = 1,
        maxChild;
    while(idx*2+2 < bound){
      if(!main[idx*2+2]){
        console.log(maxChild);
        var newIdx = idx*2+1
        maxChild = newIdx
        [main[idx], main[maxChild]] = [main[maxChild], main[idx]]
      } else {
        if(main[idx*2+1] > main[idx*2+2]){
          maxChild = (idx*2+1)
          [main[idx], main[maxChild]] = [main[maxChild], main[idx]]
        } else {
          maxChild = (idx*2+2)
          [main[idx], main[maxChild]] = [main[maxChild], main[idx]]
        }
      }
      maxChild = idx
    }
  }

  function heapify(arr){

  }

  function heapSort(){
    var bound = main.length - 1
    while(bound > 0){
      [main[bound], main[0]] = [main[0], main[bound]]
      repairDown(0)
      bound -= 1
    }
  }
}
