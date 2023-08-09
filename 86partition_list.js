// https://leetcode.com/problems/partition-list/

var partition = function(head, x) {
    if (!head || !head.next) return head;

    let list = new ListNode();
    list.next = head;

    let slow = list;

    while (slow.next && slow.next.val < x) {
        slow = slow.next;
    }

    let fast1 = slow;
    let fast2 = slow.next;

    while (fast2) {
        if (fast2.val < x) {
            const move = fast2;
            fast1.next = fast2.next;
            fast2 = fast2.next;
            const tempNext = slow.next;
            slow.next = move;
            move.next = tempNext;
            slow = slow.next;
        } else {
            fast1 = fast2;
            fast2 = fast2.next;
        }
    }

    return list.next;
};