// var permutations = [];
//

// function doPerm(str, arr) {
//     if (typeof (str) == 'string') str = str.split('');
//     if (str.length == 0) permutations.push(arr.join(''));
//     for (var i = 0; i < str.length; i++) {
//         var x = str.splice(i, 1);
//         arr.push(x);
//         doPerm(str, arr);
//         arr.pop();
//         str.splice(i, 0, x);
//     }
// }
// doPerm('ABC', []);
// console.log(permutations);

console.log(["b", "o", "b"].splice(0, 0, "t"));

// function permute(str, sub, a){
//   if(!a) a = [];
//   if(!sub) sub = '';
//   if(!str){a.push(sub); return a;}
//
//   var char = str[0]
//   str = str.slice(1)
//   permute(str, sub+char, a);
//   return permute(str, sub, a);
// }
//
// console.log(permute("heyo"));

//
// function permute(str, memo = '', arr = []){
//   if(!str){
//     a.push(memo);
//     return arr
//   }
//   for(var i = 0; i<str.length; i++){
//     permute(str.slice(i), memo + str[i], arr);
//   }
//   return arr
// }
//
// console.log(permute("ABC"));
