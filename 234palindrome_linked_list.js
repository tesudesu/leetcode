// https://leetcode.com/problems/palindrome-linked-list/

var isPalindrome = function(head) {
    let n = 1;

    let dummy = head;

    while (dummy.next) {
        n++;
        dummy = dummy.next;
    }

    dummy = head;
    let prev = null;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        const temp = dummy.next;
        dummy.next = prev;
        prev = dummy;
        dummy = temp;
    }

    if (n % 2 !== 0) {
        dummy = dummy.next;
    }

    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (dummy.val !== prev.val) {
            return false;
        }
        dummy = dummy.next;
        prev = prev.next;
    }

    return true;
};


// var isPalindrome = function(head) {
//     let arr = [];

//     while (head) {
//         arr.push(head.val);
//         head = head.next;
//     }

//     for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//         if (arr[i] !== arr[arr.length - 1 - i]) return false;
//     }

//     return true;
// };


// var isPalindrome = function(head) {
//     let length = 0;

//     let dummy = head;

//     while (dummy && dummy.next) {
//         length++;
//         dummy = dummy.next;
//     }

//     let dist = Math.floor(length / 2);
    
//     for (let i = 0; i <= dist; i++) {
//         console.log(head.val, dummy.val)
//         if (head.val !== dummy.val) return false;
//         head = head.next;
//         dummy = head;
//         length -= 2;
//         for (let j = 0; j < length; j++) {
//             dummy = dummy.next;
//         }
//     }

//     return true;
// };


// var isPalindrome = function(head) {
//     let fast = head;
//     let slow = head;

//     while (fast && fast.next) {
//         fast = fast.next.next;
//         slow = slow.next;
//     }

//     let prev = null;

//     while (slow) {
//         let temp = slow.next;
//         slow.next = prev;
//         prev = slow;
//         slow = temp;
//     }

//     while (prev) {
//         if (head.val !== prev.val) return false;
//         head = head.next;
//         prev = prev.next;
//     }

//     return true;
// };