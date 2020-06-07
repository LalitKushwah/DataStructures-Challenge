'use strict';
let n = 5;
let d = 4;
let arr = [1,2,3,4,5]
function leftRotation (array) {
    const temp = array[0];
    for (let i=1; i< array.length; i++) {
        arr[i-1] = arr[i];
    }
    arr[arr.length-1] = temp;
}

function leftShift(index) {
    for (let i=1; i<=d; i++) {
        leftRotation(arr)
    }
}

leftShift(d);
console.log(arr)