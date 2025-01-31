/*
Given an integer array arr, move all 0's to the end of it while maintaining the relative order of
the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input:
050342

Output:
534200
*/

var a = [0,5,0,3,4,2];

function zeroAtEnd(arr){
    var n = arr.length ;
    for(var i=0; i<n-1; i++){
        var flag = false;
        for(var j=0; j<n-1-i; j++){
            if(arr[j]==0 && arr[j+1]!=0){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = true;
            }
        }
        if(flag==false) break;
    }
}

zeroAtEnd(a);
console.log(a);
