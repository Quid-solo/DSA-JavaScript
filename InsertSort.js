/*
Insertion Sort:
    -> Space complexity: O(1)
    -> Time complexity: O(n^2)
    -> Best time complexity: O(n)
    -> Stable Sort
    -> In-place algorithm
    -> Implementation of Insertion sort: When we have to do less swaps */

function insertionSort(arr){
    var n = arr.length;
    for(var i=1; i<n; i++){
        var j = i;
        while(j>0 && arr[j]<arr[j-1]){
            var temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
    }
}

var array = [1,5,3,6,35,34,2];
insertionSort(array);
console.log(array);