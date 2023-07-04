// https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }

    return false;
};

// var hasCycle = function(head) {
//     while (head !== null || (head && head.val !== Infinity)) {
//         if (head.val === Infinity) return true;

//         head.val = Infinity;

//         head = head.next;
//     }

//     return false;
// };