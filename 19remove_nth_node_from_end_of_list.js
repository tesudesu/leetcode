// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;

    let fast = dummy;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    let slow = dummy;

    while (fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};