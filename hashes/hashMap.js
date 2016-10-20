function HashMap(capacity){
  this.capacity = capacity;
  this.table = [];
  this.table.length = capacity
  for(i = 0; i < capacity; i++){
    this.table[i] = new SList();
  }
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

HashMap.prototype.mod = function(key, length){
  var mod = (key % length + length) % length;
  return mod
}

HashMap.prototype.add = function(key, value){
  // generate hashKey and mod to serve as array key
  var hashKey = key.hashCode();
  var mod = this.mod(hashKey, this.table.length)
  var n = this.table[mod].find(key);
  if(n){
    return n.value = value;
  } else {
    return this.table[mod].add(key, value);
  }
}

HashMap.prototype.find = function(key){
  var hashKey = key.hashCode();
  var mod = this.mod(hashKey, this.table.length)
  var n = this.table[mod].find(key);
  if(n){
    return n.data
  } else {
    return false
  }
}

HashMap.prototype.isEmpty = function(){
  for(var i = 0; i < this.table.length; i++){
    if(!this.table[i].isEmpty){
      return false
    }
  }
  return true
}

HashMap.prototype.remove = function(key){
  var hashKey = key.hashCode();
  var mod = this.mod(hashKey, this.table.length)
  return this.table[mod].remove(key)
}

HashMap.prototype.loadFactor = function(){
  count = 0
  for(var i = 0; i < this.table.length; i++){
    count += this.table[i].length()
  }
  return count / this.table.length
}

HashMap.prototype.setSize = function(int){
  var oldCapacity = this.capacity
  console.log(this.table);
  this.capacity = int
  this.table.length = int
  for(var i = oldCapacity; i < int; i++){
    this.table[i] = new SList()
  }
  for(var i = 0; i < oldCapacity; i++){
    var current = this.table[i].head
    // nodes need to be switched into new list...
    while(current){
      this.add(current.key, current.data)
      this.head = current.next
      current = current.next
    }
  }
}
