'use strict';

const bstFile = require('./bst1.js');

let BST = bstFile.BST;
let node = bstFile.NODE;

let bst1 = new BST();
// bst1.add(3);
// bst1.add(32);
// bst1.add(2);
// bst1.add(22);
bst1.add(1);
// bst1.add(-8);
// bst1.add(-10);
bst1.add(-100);
bst1.add(256);

bst1.remove(1);

bst1.inOrder(bst1.root);
bst1.contains(-10);

//
// var grades = genArray(100);
// prArray(grades);
// var gradedist = new BST();
// for(var i = 0; i < grades.length; i++){
//     var g = grades[i];
//     var grade = gradedist.find(g);
//     if (grade == null) {
//         gradedist.insert(g);
//     }
//     else {
//         gradedist.update(g);
//     }
// }
//
// let cont = "y";
//
// while (cont == "y") {
//     console.log("Enter a grade: ")
// }