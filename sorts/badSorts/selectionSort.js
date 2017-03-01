function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var minIdx = i
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIdx]){
                minIdx = j
            }
        }
        if(minIdx != i){
            var temp = arr[i]
            arr[i] = arr[minIdx]
            arr[minIdx] = temp
        }
    }
    return arr
}

console.log(selectionSort([5, 2, 7, 1, 9, 0]))
