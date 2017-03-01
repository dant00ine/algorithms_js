function quickSort(arr){

    function partition(low, high){
        if(high - low < 2){
            return
        }
        var pivot = arr[low]
        var wall = low
        for(var i = low; i <= high; i++){
            if(arr[i] < pivot){
                wall += 1
                arr.swap(i, wall)
            }
        }
        arr.swap(low, wall)

        partition(low, wall-1)
        partition(wall+1, high)
    }

    return partition(0, arr.length-1)
}

Array.prototype.swap = function(idx1, idx2){
    var temp = this[idx1]
    this[idx1] = this[idx2]
    this[idx2] = temp
}

var arr = [4, 2, 9, 1, 12, 7, 6]
console.log(quickSort(arr));
console.log(arr);
