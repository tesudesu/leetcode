// https://leetcode.com/problems/middle-of-the-linked-list/

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};