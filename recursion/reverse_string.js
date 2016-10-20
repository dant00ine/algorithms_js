function reverseString(str){
    if (str.length == 0)
         return str;

    return reverseString(str.substring(1)) + str.charAt(0);
}

console.log(reverseString("Hello"));


// function reverseString(string){
//   if(string.length == 0){
//     return string
//   }
//   var newStr = ""
//   return newStr += string.charAt(string.length - 1) + reverseString(string.slice(0, string.length - 1))
// }
//
// console.log(reverseString("hello"));
