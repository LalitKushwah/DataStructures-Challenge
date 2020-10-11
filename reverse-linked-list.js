// https://www.hackerrank.com/challenges/reverse-a-linked-list/problem?h_r=next-challenge&h_v=zen
function reverse(head) {
    if (head) {
        let temp = head;
        let nodeArray = [head]
        while (temp.next) {
            nodeArray.push(temp.next);
            temp = temp.next;
        }
        for (let i = nodeArray.length-1; i>0;i--) {
            nodeArray[i].next = nodeArray[i-1];
        }
        nodeArray[0].next = null;
        head = nodeArray[nodeArray.length-1]
    } else {
        head = null;
    }
    return head;
}