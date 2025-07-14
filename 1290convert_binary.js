// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

var getDecimalValue = function(head) {
    let val = 0;

    while (head) {
        val *= 2;
        if (head.val === 1) {
            val += 1;
        }
        head = head.next;
    }

    return val;
};