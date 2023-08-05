// https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/

var insertGreatestCommonDivisors = function(head) {
    const calculateGCD = (num1, num2) => {
        for (let i = Math.min(num1, num2); i >= 1; i--) {
            if (num1 % i === 0 && num2 % i === 0) {
                return i;
            }
        }
    }

    const headPointer = head;

    while (head && head.next) {
        const gcd = calculateGCD(head.val, head.next.val);
        let node = new ListNode(gcd, head.next);
        head.next = node;
        head = head.next.next;
    }

    return headPointer;
};