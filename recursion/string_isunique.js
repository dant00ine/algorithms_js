function string_isunique(str, chars = {}){
  if(str.length == 0){
    var results = []
    for(char in chars){
      if(chars[char]){
        results.push(char)
      }
    }
    return results
  }
  if(!chars[str[0]]){
    chars[str[0]] = true
  } else {
    chars[str[0]] = false
  }
  return string_isunique(str.substring(1), chars)
}

console.log(string_isunique("Flies Lives"));
