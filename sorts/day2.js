// choose a pivot point
// rearrange the array such that all items to the
// left of the pivot are smaller, and right are larger
function partition(arr){
    var pivot = arr[Math.floor(arr.length-1/2)]
    console.log(pivot);
    var low = 0
    var high = arr.length-1
    while(low < high){
        while(arr[low] < pivot){
            low = low + 1
        }
        while(arr[high] > pivot){
            high = high - 1
        }
        var temp = arr[low]
        arr[low] = arr[high]
        arr[high] = temp
        low += 1
        high -= 1
    }
    return arr
}

var arr = [4, 5, 2, 6, 3, 9, 12, 1]
partition(arr)
console.log(arr);

function merge(arr1, arr2){

}

function partitionInPlace(){

}
