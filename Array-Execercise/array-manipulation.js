'use strict';

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    const arr = [];
    for(let i=0;i<n+2;i++) {
        arr[i] = 0;
    }
    for(let j=0; j<queries.length; j++) {
        // let max = 0;
        const a = queries[j][0];
        const b = queries[j][1];
        const k = queries[j][2];
        arr[a] += k;
        arr[b+1] -= k;
        console.log(arr);
    };

    // find max element
    let max = 0;
    let sum = 0;
    for (let i=0; i<arr.length;i++) {
        sum = sum + arr[i];
        max = sum > max ? sum : max;
    }
    return max;
}

console.log(arrayManipulation(5, [[1,2,100],[2,5,100],[3,4,100]]));