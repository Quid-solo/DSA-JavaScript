/*
Merge sort algorithm:
    -> We usually use Divide and conquer rule using recursion.
    -> Divide the array into two equal halves.
    -> Sort the two subarrays separately using recursion.(Sub-problem)
    -> Merge the two sorted sub-arrays to create an overall sorted array.(Self-work)
    -> Time complexity: O(nlogn)
    -> Space complexity: O(n)
    -> Stable algorithm
    -> Not In-place
*/

function merge(arr, l, mid, r){
    const left =[];
    const right = [];
    for(var i=l; i<=r; i++){
        (i<=mid)?left.push(arr[i]):right.push(arr[i]);
    }
    var i=0, j=0; k=l;
    while(i< left.length && j<right.length){
        arr[k++] = (left[i]<=right[j]) ? left[i++] : right[j++];
    }
    while(i<left.length) arr[k++] = left[i++];
    while(j<right.length) arr[k++] = right[j++];
}

function mergeSort(arr, l, r){
    if(l==r) return;

    var mid = Math.floor((l+r)/2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid+1, r);

    merge(arr, l, mid, r);

}


const a = [3,6,2,16,5,9,12,4,11,1];
mergeSort(a, 0, a.length-1);
console.log(a);
