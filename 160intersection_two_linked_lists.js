// https://leetcode.com/problems/intersection-of-two-linked-lists/

// O(n*m) time, O(1) space

var getIntersectionNode = function(headA, headB) {
    while (headA) {
        let dummyB = headB;
        while (dummyB) {
            if (headA === dummyB) return headA;
            dummyB = dummyB.next;
        }
        headA = headA.next;
    }

    return null;
};


// O(n+m) time, O(1) space

// var getIntersectionNode = function(headA, headB) {
//     let totA = 0;
//     let totB = 0;

//     let dummyA = headA;
//     let dummyB = headB;

//     while (dummyA) {
//         dummyA = dummyA.next;
//         totA++;
//     }

//     while (dummyB) {
//         dummyB = dummyB.next;
//         totB++;
//     }

//     if (dummyA !== dummyB) return null;

//     if (totA === totB) {
//         while (headA) {
//             if (headA === headB) return headA;
//             headA = headA.next;
//             headB = headB.next;
//         }
//     } else if (totA > totB) {
//         while (totA > totB) {
//             headA = headA.next;
//             totA--;
//         }
//         while (headA) {
//             if (headA === headB) return headA;
//             headA = headA.next;
//             headB = headB.next;
//         }
//     } else {
//         while (totB > totA) {
//             headB = headB.next;
//             totB--;
//         }
//         while (headA) {
//             if (headA === headB) return headA;
//             headA = headA.next;
//             headB = headB.next;
//         }
//     }
// };