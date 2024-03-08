// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function(head, n) {
    let list = new ListNode();
    list.next = head;
    
    let fast = list;
    let slow = list;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return list.next;
};


var removeNthFromEnd = function(head, n) {
    let list = new ListNode();
    list.next = head;
    
    let tot = 0;
    let dummy = list;
    while (dummy) {
        tot++;
        dummy = dummy.next;
    }

    let start = tot - n - 1;

    dummy = list;
    while (start > 0) {
        dummy = dummy.next;
        start--;
    }

    dummy.next = dummy.next.next;

    return list.next;
};