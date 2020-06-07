/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    // Write your code here
    let seqList = [];
    let lastAnswer = 0;
    let result = [];
    // Make dyanmic seqList
    if (n > 0) {
        for (let  i= 0; i < n; i++) {
            seqList[i] = [];
        }
        queries.forEach((query) => {
            if (query[0] === 1) {
                const index = (query[1] ^ lastAnswer) % n;            
                seqList[index].push(query[2]);
            } else if (query[0] === 2) {
                const index = (query[1] ^ lastAnswer) % n;
                const res = (query[2]) % (seqList[index].length)
                lastAnswer = seqList[index][res];
                result.push(lastAnswer);
            }
        })
        return result;
    }

}
