// https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem?isFullScreen=false

function insertNodeAtTail(head, data) {
    if(head) {
        let temp = head;
        while(temp.next) {
            temp = temp.next;
        }
        const newNode = new SinglyLinkedListNode(data);
        temp.next = newNode;
        newNode.next = null;
    } else {
        const newNode = new SinglyLinkedListNode(data);
        newNode.next = null;
        head = newNode
    }
    return head
}