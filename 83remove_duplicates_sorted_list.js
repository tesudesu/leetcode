// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

var deleteDuplicates = function(head) {
    const dummy = head;

    while (head && head.next) {
        if (head.next.val === head.val) {
            let pointer = head;
            while (pointer && pointer.next && pointer.next.next) {
                if (pointer.next.next.val !== head.val) {
                    head.next = pointer.next.next;
                    break;
                }
                pointer = pointer.next;
            }
            if (head.next.val === head.val) head.next = null;
        }
    }

    return dummy;
};

// var deleteDuplicates = function(head) {
//     const dummy = head;

//     while (head) {
//         while (head.next && head.next.val === head.val) {
//             head.next = head.next.next;
//         }
//         head = head.next;
//     }

//     return dummy;
// };