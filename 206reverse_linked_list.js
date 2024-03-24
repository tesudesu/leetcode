// https://leetcode.com/problems/reverse-linked-list/

var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
};


var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    const p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};