function forEach(arr, callback) {
  for (var index = 0; index < arr.length; index++) {
    callback(arr[index], index);
  }
}

function map(arr, callback) {
  var result = [];
  forEach(arr, function(item, index) {
    result.push(callback(item, index));
  });

  return result;
}

function map2(arr, callback) {
  var result = [];

  for (var index = 0; index< arr.length; index++) {
    result.push(callback(arr[index], index));
  }

  return result;
}


function filter(arr, callback) {
  var result = [];

  forEach(arr, function(item, index) {
    if (callback(item, index)) {
      result.push(item);
    }
  });

  return result;
}
var array = [1,2,3,4,5]

console.log(map(array, function(item, index) {
  return item + index;
}));


function reduce(arr, callback){
  var result = 0;
  forEach(arr, function(item, index){
    result = callback(result, item)
  })
  return result;
}

var reduction = reduce(array, function(a, b){
  return a + b
})
console.log(reduction);
