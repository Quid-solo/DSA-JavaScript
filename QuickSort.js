/*
Quick sort algorithm:
    -> It is also a divide and conquer algorithm.
    -> We choose a random element of array that is called Pivot element and put it at its right position that is Pivot index
    -> We rearrange the elements before and after pivot index such that all the elements before pivot index is less than pivot element
       and all the elements after the pivot index is greater than pivot element.
    -> Not a stable algorithm
    -> Avg and best time complexity: O(nlogn)
    -> Worst time complexity: O(n^2)  ---> Can mostly be avoided --> Randomized quick sort
    -> Avg and best space complexity: O(logn)
    -> Worst time complexity: O(n)
    -> In-place algorithm
*/

function partition(arr,st,end){
    var pi = Math.floor((Math.random()*(end-st+1))+st);                   //Randomized quick sort
    var eleLtP = 0;
    for(var i = st; i<=end; i++){
        if(i != pi && arr[i]<=arr[pi]) eleLtP++;
    }
    var temp = arr[st+eleLtP];
    arr[st+eleLtP] = arr[pi];
    arr[pi] = temp;
    console.log(pi);
    pi = st + eleLtP;
    var i = st, j = end;
    while(i<pi && j>pi){
        while(arr[i]<=arr[pi]) i++;
        while(arr[j]>arr[pi]) j--;
        if(i<pi && j>pi){
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++;
            j--;
        }
    }
    console.log(pi);
    console.log(a);
    return pi;
}


function quickSort(arr,st,end){
    if(st >= end) return;
    let pi = partition(arr,st,end);
    quickSort(arr,st,pi-1);
    quickSort(arr,pi+1,end);
}


var a = [5,8,4,2,9,17,1,13,5,9,7];
quickSort(a,0,a.length-1);
console.log(a);

