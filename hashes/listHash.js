function HashMap(capacity){
  this.capacity = capacity;
  this.table = [];
}

String.prototype.hashCode = function(){
  var hash = 0;
  if(this.length == 0) return hash;
  for(i = 0; i < this.length; i++){
    char = this.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash &= hash;
  }
  return hash
}

function mod(input, div){
  return (input % div + div) % div;
}

var listMap = new HashMap(100)
