function repairDown(idx, arr, bound = arr.length-1){
    var parent = idx
    var child1 = idx * 2 + 1
    var child2 = idx * 2 + 2
    // while current index (parent) has a child that is greater
    while(child1 < bound && (arr[child1] > arr[parent] || arr[child2] > arr[parent])){

        if(!arr[child2]){
            [arr[child1], arr[parent]] = [arr[parent], arr[child1]]
            parent = child1
        }

        else if(arr[child1] > arr[child2]){
            [arr[child1], arr[parent]] = [arr[parent], arr[child1]]
            parent = child1
        }

        else {
            [arr[child2], arr[parent]] = [arr[parent], arr[child2]]
            parent = child2
        }

        child1 = parent * 2 + 1
        child2 = parent * 2 + 2
    }
}

function heapSort(arr){
    heapify(arr)
    var bound = arr.length-1
    while(bound > 0){
        [arr[0], arr[bound]] = [arr[bound], arr[0]]
        bound--
        repairDown(0, arr, bound)
    }
    return arr
}

function heapify(arr){
    var idx = Math.floor(arr.length / 2)
    while(idx >= 0){
        repairDown(idx, arr)
        idx --
    }
}

var arr = [11, 450, 3, 96, 5, 2000, 38]
// heapify(arr)
// console.log(arr);
console.log(heapSort(arr));
