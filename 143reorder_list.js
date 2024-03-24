// https://leetcode.com/problems/reorder-list/

var reorderList = function(head) {
    let n = 0;

    let dummy = head;

    while (dummy) {
        n++;
        dummy = dummy.next;
    }

    dummy = head;

    for (let i = 0; i < Math.ceil(n / 2); i++) {
        dummy = dummy.next;
    }

    let prev = null;

    while (dummy) {
        const temp = dummy.next;
        dummy.next = prev;
        prev = dummy;
        dummy = temp;
    }

    dummy = head;
    let end = true;
    let temp;
    let i = 1;

    while (i < n) {
        if (end) {
            temp = dummy.next;
            dummy.next = prev;
            prev = prev.next;
            end = false;
        } else {
            dummy.next = temp;
            end = true;
        }
        dummy = dummy.next;
        i++;
    }

    dummy.next = null;
};


// var reorderList = function(head) {
//     let arr = [];
//     let tot = 0;

//     let dummy = head;

//     while (dummy) {
//         arr.push(new ListNode(dummy.val));
//         dummy = dummy.next;
//         tot++;
//     }

//     dummy = head;
//     let i = arr.length - 1;
//     let j = 1;
//     let tempNext;
//     let end = true;

//     while (j < tot) {
//         if (end) {
//             tempNext = dummy.next;
//             dummy.next = arr[i];
//             i--;
//             end = false;
//         } else {
//             dummy.next = tempNext;
//             end = true;
//         }
        
//         dummy = dummy.next;
//         j++;
//     }

//     dummy.next = null;
// };