
function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    console.log(arr);
    return arr;
}


// bubbleSort([7,5,2,4,3,9]);
// bubbleSort([9,7,5,4,3,1]);

function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;

    return arr;
}

// BROKEN
function selectionSort(arr){

    for(var j = 0; j<arr.length; j++){

        var iMin = j;

        for(var i = j+1; i<arr.length; i++){
            if(arr[i] < arr[iMin]){
                iMin = i;
            }
        }
        if(iMin != j){
            swap(arr, j, iMin);
        }

    }
    return arr
}

console.log(selectionSort([7,5,2,4,3,9]));
console.log(selectionSort([9,7,5,4,3,1]));


function insertionSort(arr){
    var slotPosition;
    var valueToInsert;

    for( var i = 1; i < arr.length; i++ ){
        valueToInsert = arr[i];
        slotPosition = i;
        while( slotPosition>0 && arr[slotPosition-1] > valueToInsert){
            arr[slotPosition] = arr[slotPosition-1];
            slotPosition = slotPosition - 1;
        }
        arr[slotPosition] = valueToInsert;
    }
    console.log(arr);
    return arr;
}

// insertionSort([7,5,2,4,3,9]);
// insertionSort([9,7,5,4,3,1]);

function merge(left, right){
    var result = [];

    while(left.length && right.length){
        if(left[0] <= right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while(left.length){
        result.push(left.shift());
    }

    while(right.length){
        result.push(right.shift());
    }

    return result;
}

function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }

    var middle = parseInt(arr.length/2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

let mergeResult = mergeSort([7,5,2,4,3,9]);
console.log("merge result: "+ mergeResult);
// console.log("merge sort: " + mergeSort([9,7,5,4,3,1]));


function multiKeySort(arr){

    for(var i = 0; i < arr.length; i++){

    }

}

keyArr = [
    {firstName: "Daniel", lastName: "Thompson"},
    {firstName: "Pablo", lastName: "Neruda"},
    {firstName: "John", lastName: "Keats"},
    {firstName: "Pablo", lastName: "Escobar"},
    {firstName: "Pablo", lastName: "Picasso"},
    {firstName: "Michael", lastName: "Keats"},
    {firstName: "Rick", lastName: "Thompson"},
];

let keySortResult = multiKeySort(keyArr);
