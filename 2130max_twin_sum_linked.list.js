// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

var pairSum = function(head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let prev = null;

    while (head !== slow) {
        const temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }

    let max = 0;

    while (slow) {
        max = Math.max(prev.val + slow.val, max);
        prev = prev.next;
        slow = slow.next;
    }

    return max;
};

// var pairSum = function(head) {
//     let arr = [];

//     while (head) {
//         arr.push(head.val);
//         head = head.next;
//     }

//     let max = 0;
    
//     for (let i = 0; i < arr.length/2; i++) {
//         max = Math.max(arr[i] + arr[arr.length - 1 - i], max);
//     }

//     return max;
// };