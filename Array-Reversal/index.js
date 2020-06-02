'use strict';

// reverse Array function below.
function reverseArray(a) {
    /** built in method */
    a.reverse();

    /** custom approach */
    const temp = [];
    for (let i = a.length-1; i >= 0; i--) {
        temp.push(a[i]);
    }
    console.log(temp);
    return temp;
}

reverseArray([4,3,2,1]);
