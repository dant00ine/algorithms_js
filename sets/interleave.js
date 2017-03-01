function interleave(arr1, arr2){
  var run1 = 0; var run2 = 0
  var resultArray = []
  while(run1 != arr1.length-1 && run2 != arr2.length-1){
    resultArray.push(arr1[run1]); run1++
    resultArray.push(arr2[run2]); run2++
  }
  if(run1 != arr1.length-1){
    for(i=run1; i<arr1.length; i++){
      resultArray.push(arr1[i])
    }
  }
  if(run2 != arr2.length-1){
    for(i=run2; i<arr2.length; i++){
      resultArray.push(arr2[i])
    }
  }
  return resultArray
}
var obj = {}

obj.hey = "f"

if(obj.hey){
    console.log("yo");
}

console.log(obj.hey);
