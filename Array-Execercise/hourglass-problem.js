'use strict';

let arr = [
    [0, -4, -6, 0, -7, -6],
    [-1, -2, -6, -8, -3, -1],
    [-8, -4, -2, -8, -8, -6],
    [-3, -1, -2, -5, -7, -4],
    [-3, -5, -3, -6, -6, -6],
    [-3, -6, 0, -8, -6, -7]
];
let x = 0;
let y = 0;
let max = Number.MIN_SAFE_INTEGER;
console.log()
for (let i=0; i<4; i++) {
    let sum = 0;
    for (let j=0; j<4; j++) {
        sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
        if (sum > max) {
            max = sum;
            x = i;
            y = j;
        }
    }
}
console.log("Max value ==", max);
