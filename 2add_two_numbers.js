// https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function(l1, l2) {
    let num1 = [];
    let num2 = [];

    while (l1) {
        num1.unshift(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        num2.unshift(l2.val);
        l2 = l2.next;
    }

    let sum = (BigInt(num1.join('')) + BigInt(num2.join(''))).toString().split('').reverse();
    let node = new ListNode(sum[0]);
    let dummy = node;

    for (let i = 1; i < sum.length; i++) {
        let curr = new ListNode(Number(sum[i]));
        node.next = curr;
        node = curr;
    }

    return dummy;
};