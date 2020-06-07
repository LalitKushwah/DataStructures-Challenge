'use strict';

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    const arr = [];
    for(let i=0;i<n;i++) {
        arr[i] = 0;
    }
    let maxElement = 0;
    for(let j=0; j<queries.length; j++) {
        let max = 0;
        for(let i=0; i<arr.length;i++) {            
            if (i >= (queries[j][0]-1) && i <= (queries[j][1]-1)) {
                arr[i] = arr[i] + queries[j][2];
            }
            max = arr[i] < max ? max : arr[i];
        };
        console.log(arr);
        maxElement = max;
    };

    console.log(maxElement)
    // find max element
    return maxElement;
}

arrayManipulation(5, [[1,2,100],[2,5,100],[3,4,100]]);