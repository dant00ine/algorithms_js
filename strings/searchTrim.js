// given a string create a hash that could be used for a hash table
// the challenge is to create an algorithm that creates

// give an intro on prototypes

String.prototype.search = function(c){
  console.log(this.length);
  for(var i = 0; i < this.length; i++){
    console.log(this[i]);
    if(this[i] == c){
      return true
    }
  }
  return false
}


console.log("hello".search("l"))
// console.log("hello"[2]);

String.prototype.trim = function(){
  var newStr = ""
  for(var i = 0; i < this.length; i++){
    if(!this[i].match(/[\n\s\t]/)){
      newStr += this[i]
    }
  }
  return newStr
}

console.log(`  \t hey what's up
what do ya know
what do ya feeeeel? \n       `.trim());
