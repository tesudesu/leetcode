// https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/

const gcd = (a, b) => {
    if (a === 0) {
        return b;
    }
    return gcd(b % a, a);
}

var insertGreatestCommonDivisors = function(head) {
    let dummy = head;
    let p1 = head;
    let p2 = head.next;

    while (p1 && p2) { 
        let num = gcd(p1.val, p2.val);
        p1.next = new ListNode(num, p2);
        p1 = p2;
        p2 = p1.next;
    }

    return dummy;
};


// var insertGreatestCommonDivisors = function(head) {
//     const calculateGCD = (num1, num2) => {
//         for (let i = Math.min(num1, num2); i >= 1; i--) {
//             if (num1 % i === 0 && num2 % i === 0) {
//                 return i;
//             }
//         }
//     }

//     const headPointer = head;

//     while (head && head.next) {
//         const gcd = calculateGCD(head.val, head.next.val);
//         let node = new ListNode(gcd, head.next);
//         head.next = node;
//         head = head.next.next;
//     }

//     return headPointer;
// };