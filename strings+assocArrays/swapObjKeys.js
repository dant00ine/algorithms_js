function swap(json){
      var ret = {};
      for(var key in json){
        ret[json[key]] = key;
      }
      return ret;
    }

function swapInPlace(arr){
  for key in arr{
    var temp = arr[key]
    arr[arr[key]] = key
    arr
  }
}


var asoc =  {A : 1, B : 2, C : 3, D : 4}

swap(asoc)

console.log(asoc);
