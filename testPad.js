'use strict';

const bstFile = require('./trees/bst1.js');

const BST = bstFile.BST;
const NODE = bstFile.NODE;

// let bst1 = new BST();
// bst1.add(3);
// bst1.add(32);
// bst1.add(2);
// bst1.add(10);
// bst1.add(35);
// bst1.add(5);
// bst1.add(12);
// bst1.add(11);
// bst1.add(13);
// bst1.add(-1);
// bst1.add(4);

// console.log("List maximum value: " + bst1.getMax());
// console.log("List minimum value: " + bst1.getMin());

// console.log("IN ORDER: ");
// bst1.inOrder(bst1.root);
// console.log("PRE ORDER: ");
// bst1.preOrder(bst1.root);
// let NODE10 = bst1.root.right.left;
// console.log("NODE 10: " + NODE10.data);
// console.log("NODE 35: " + bst1.root.right.right.data);
// console.log("NODE 12 left: " + NODE10.right.left.data);
// console.log("NODE 12 right: " + NODE10.right.right.data);
//
// bst1.remove(10);
// // bst1.remove(3);
//
//
//
// console.log("PRE ORDER AFTER REMOVAL");
// bst1.preOrder(bst1.root);
// console.log("ROOT: " + bst1.root.data);
// console.log("32.left " + bst1.root.right.left.data);
// console.log(bst1.root.right.left.right.right.data);
// console.log(bst1.root.right.left.left.data);
// bst1.contains(-10);



//WORK WITH READLINE AND COUNTING OCCURENCES IN BST

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

//
// function prArray(arr){
//     console.log(arr[0].toString() + ' ');
//     for( var i = 1; i < arr.length; i++) {
//         console.log(arr[i].toString() + ' ');
//         if(i % 10 == 0){
//             console.log(" ");
//         }
//     }
// }
//
// function genArray(length) {
//     var arr = [];
//     for (var i = 0; i < length; i++){
//         arr[i] = Math.floor(Math.random() * 101);
//     }
//     return arr;
// }
//
// //
// var grades = genArray(100);
// prArray(grades);
// var gradedist = new BST();
//
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

// var cont = "y";

// while (cont == "y") {
//     console.log("Enter a grade: ");
//     var g = readline();
//     console.log(g);

// }