function Trie(){
  // this = {};
  this.isValidWord = false;
}

Trie.prototype.add = function(word){
  var node = this;
  for(var i = 0; i < word.length; i++){
    if(node[word[i]] === undefined){
      // Create out new connection
      node[word[i]] = new Trie();
    }
    node = node[word[i]];
  }
  node.isValidWord = true;
  return true;
}

Trie.prototype.find = function(word){
  var node = this;
  for(var i = 0; i < word.length; i++){
    if(node[word[i]] === undefined){
      // Create out new connection
      return false;
    }
    node = node[word[i]];
  }
  return node.isValidWord;
}

var myTrie = new Trie();
myTrie.add('home');
myTrie.add('foam');
myTrie.add('homeGrown')
myTrie.add('gnome')

console.log(`Zebra: ${myTrie.find('zebra')}`);
console.log(`Gnome: ${myTrie.find('gnome')}`);
console.log(`Homegr: ${myTrie.find('homegr')}`);
console.log(`foam: ${myTrie.find('foam')}`);
