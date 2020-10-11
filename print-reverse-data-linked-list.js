// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse/problem
function reversePrint(head) {
    let temp = head;
    const tempArray = [];
    while(temp.next != null) {
        tempArray.push(temp.data);
        temp = temp.next;
    }
    tempArray.push(temp.data);
    for (let i=tempArray.length-1; i>=0; i--) {
        console.log(tempArray[i]);
    }

}