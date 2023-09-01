// https://leetcode.com/problems/rotate-list/

var rotateRight = function(head, k) {
    if (!head) return null;

    let num = head;
    let length = 0;

    while (num) {
        num = num.next;
        length++;
    }

    k = k % length;

    if (k === 0) return head;

    let back = head;
    let prev;

    for (let i = 0; i < length - k; i++) {
        prev = back;
        back = back.next;
    }

    prev.next = null;

    let front = back;

    while (front && front.next) {
        front = front.next;
    }

    front.next = head;

    return back;
};