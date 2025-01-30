/*
Selection sort algorithm:
    Selects an element and puts it at its correct position
    -> Space Complexity: O(1)
    -> Time Complexity: O(n^2)
    -> Unstable sort
    ->In-place algorithm
    */



// Sort the given array in ascending order

function selectionSort(arr){
    var n = arr.length;
    for(var i=0; i<n-1; i++){
        for(var j=i+1; j<n; j++){
            if(arr[j]<arr[i]){
                var temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
}

var array = [3,7,4,2,1,8,5,6];
selectionSort(array);
console.log(array);