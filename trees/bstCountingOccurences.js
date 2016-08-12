/**
 * Created by danimagus on 8/11/16.
 */

// WORK WITH READLINE AND COUNTING OCCURENCES IN BST

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function prArray(arr){
    console.log(arr[0].toString() + ' ');
    for( var i = 1; i < arr.length; i++) {
        console.log(arr[i].toString() + ' ');
        if(i % 10 == 0){
            console.log(" ");
        }
    }
}

function genArray(length) {
    var arr = [];
    for (var i = 0; i < length; i++){
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}


var grades = genArray(100);
prArray(grades);
var gradedist = new BST();

for(var i = 0; i < grades.length; i++){
    var g = grades[i];
    var grade = gradedist.find(g);
    if (grade == null) {
        gradedist.insert(g);
    }
    else {
        gradedist.update(g);
    }
}

var cont = "y";

while (cont == "y") {
    console.log("Enter a grade: ");
    var g = readline();
    console.log(g);

}