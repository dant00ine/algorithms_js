'use strict';

const bstFile = require('./bst.js');

let bst = bstFile.bst;
let node = bstFile.node;

let bst1 = new bst();
bst1.add(3);
bst1.add(32);
bst1.add(2);
bst1.add(22);
bst1.add(1);
bst1.add(-8);
bst1.add(-10);
bst1.add(-100);
bst1.add(256);

bst1.remove(1);

bst1.inOrder(bst1.root);
bst1.contains(-10);