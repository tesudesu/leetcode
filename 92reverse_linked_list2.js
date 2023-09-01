// https://leetcode.com/problems/reverse-linked-list-ii/

var reverseBetween = function(head, left, right) {
    if (left === right) return head;

    let dummy = head;

    let front = head;

    for (let i = 1; i < left - 1; i++) {
        front = front.next;
    }

    for (let i = 1; i <= left - 1; i++) {
        head = head.next;
    }

    let end = head;

    for (let i = 0; i <= right - left; i++) {
        end = end.next;
    }

    for (let i = 0; i <= right - left; i++) {
        let temp = head.next;
        head.next = end;
        end = head;
        head = temp;
    }

    if (left === 1) {
        return end;
    } else {
        front.next = end;
        return dummy;
    }
};