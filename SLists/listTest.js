/**
 * Created by danimagus on 8/11/16.
 */
const listFile = require('./SList.js');

const SList = listFile.SList;
const NODE = listFile.NODE;

let list1 = new SList();

list1.add(6);
list1.add(7);
list1.addFirst(3);
list1.contains(7);
list1.show();
console.log("length: " + list1.length());
console.log(`length: ${list1.length()}`);