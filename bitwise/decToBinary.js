function decToBinary(num){
  var arr = []
  while(num >= 1){
    if(num % 2 == 0){
      num = Math.floor(num / 2)
      arr.push(0)
    } else {
      num = Math.floor(num / 2)
      arr.push(1)
    }
  }
  return arr.reverse().join("")
}

console.log(binaryConvert(156));

function binaryToDec(bin){

}

// Given a big string containing many words, return an object that
// represents the occurence of words in the string

// looking at this object, I should see all of the words in the string,
// and where they existed in the object
