// https://leetcode.com/problems/merge-nodes-in-between-zeros/

var mergeNodes = function(head) {
    let ans = new ListNode();
    let dummy = ans;

    let sum = 0;
    let started = false;

    while (head) {
        if (head.val === 0) {
            if (!started) {
                started = true;
            } else {
                ans.next = new ListNode(sum);
                ans = ans.next;
                sum = 0;
            }
        } else {
            sum += head.val;
        }
        head = head.next;
    }

    return dummy.next;
};