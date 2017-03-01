var strOfConstLengthArray = ["AAA", "BBB", "CCC", "BCA", "CAB", "ABB", "CAA", "BCA", "ABC"]
var characters = ["A", "B", "C"]

function radixSort(arr, orderedChars){
  var buckets = {}
  // number of overall steps in sorting process corresponds to individual string length
  for(i = arr[0].length-1; i >= 0; i--){
    // initialize and/or empty buckets
    console.log(`loop ${i}`);
    console.log(arr);
    console.log(buckets);
    for(t = 0; t < arr[0].length; t++){
      buckets[t] = []
    }
    console.log("post emptying");
    console.log(buckets);
    // sort each string into appropriate buckets
    for(j = 0; j < arr.length; j++){
      console.log(`i: ${i}, j: ${j}`);
      buckets[identifyCharacter(arr[j][i], orderedChars)].push(arr[j])
    }
    // empty array and restore sequentially from buckets
    var arr = []
    for(bucket in buckets){
      for(k = 0; k < bucket.length; k++){
        arr.push(buckets[bucket][k])
      }
    }
  }

  return arr
}

function identifyCharacter(char, orderedChars){
  // returns orderedChars index of given character
  for(i=0;i<orderedChars.length; i++){
    if(char == orderedChars[i]){
      return i
    }
  }
  return false
}

console.log(radixSort(strOfConstLengthArray, characters));
