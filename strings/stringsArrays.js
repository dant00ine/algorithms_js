function removeBlanks(string){
  var splitString = string.split(" ");

  for(var i = 0; i < splitString.length + 1; i++){
    if(splitString[i] == undefined){
      break;
    }
    if(splitString[i].length == 0){
      splitString.splice(i, 1);
      i--
    }
  }
  string = splitString.join("");
  return string;
}

function getDigits(string){
  var splitString = string.split("");
  var numArray = [];

  for(var i = 0; i < splitString.length + 1; i++){
    let potentialInt = parseInt(splitString[i])
    if(potentialInt){
      numArray.push(potentialInt);
    }
  }
  var numbers = numArray.join("");
  return numbers;
}

function acronyms(string){
  var splitString = string.split(" ");
  var newString = "";
  for(var i = 0; i < splitString.length; i++){
    if(splitString[i]){
      newString += splitString[i][0].toUpperCase();
    }
  }
  return newString;
}

function countNonSpaces(string){
  string = removeBlanks(string);
  return string.length;
}

function reverse(string){
  splitString = string.split("");
  for(var i = 0; i ; i--){

  }
}
