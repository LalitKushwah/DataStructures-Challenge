// https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem
function deleteNode(head, position) {    
    let temp = head;    
    if (position == 0) {
        head = temp.next
        return head
    };
    for(let i=0;i<position-1;i++) {
        temp = temp.next;
    }
    const tempNode = temp.next;
    temp.next = tempNode.next;
    return head;
}