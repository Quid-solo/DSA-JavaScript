/*Bubble sort algorithm:
    We do a certain no. of passes and in every pass, we compare adjacent elements and swap them if they are not in 
    correct order.
    -> There are n-1 passes
    -> In every iteration one element gets its correct position
    -> Space complexity: O(1)
    -> Time complexity: O(n^2)
    -> Stable sort
    -> In-place algorithm */


// Sort the given array in ascending order


function bubbleSort(array){
    var n = array.length;
    for(var i=0; i<n-1; i++){              // n-1 passes
        var flag = false;                  // has any swapping happened   Using this flag we have improve time complexity for nearly sorted arrays or say best time complexity -> O(n)
        for(j=0; j<n-1-i; j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                flag = true;
            }
        }
        if(flag==false) return;          // have any swaps happened
    }   
}

var arr = [7,5,6,3,7,4];
bubbleSort(arr);
console.log(arr);
