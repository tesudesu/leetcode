// https://leetcode.com/problems/odd-even-linked-list/

var oddEvenList = function(head) {
    if (head === null) return null;

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (even && even.next) {
        odd.next = odd.next.next;
        odd = odd.next;
        even.next = even.next.next;
        even = even.next;
    }

    odd.next = evenHead;

    return head;
};