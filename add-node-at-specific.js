// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem

function insertNodeAtPosition(head, data, position) {
    const newNode = new SinglyLinkedListNode(data);
    let temp = head;
    let tempAdd;
    for (let i=0; i<position-1; i++) {
        temp = temp.next;
    }
    tempAdd = temp.next;
    temp.next = newNode;
    newNode.next = tempAdd;    
    return head;
}