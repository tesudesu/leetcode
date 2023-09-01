// https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/

var doubleIt = function(head) {
    let list;

    if (head.val * 2 > 9) {
        list = new ListNode(1, head);
    } else {
        list = head;
    }

    while (head) {
        if (head.next && head.next.val * 2 > 9) {
            head.val = ((head.val * 2) % 10) + 1;
        } else {
            head.val = (head.val * 2) % 10;
        }
        head = head.next;
    }

    return list;
};


// var doubleIt = function(head) {
//     let num = "";

//     while (head) {
//         num += head.val;
//         head = head.next;
//     }

//     num = String(BigInt(num) + BigInt(num));

//     let node = new ListNode(Number(num[0]));

//     const dummy = node;

//     for (let i = 1; i < num.length; i++) {
//         node.next = new ListNode(Number(num[i]));
//         node = node.next;
//     }

//     return dummy;
// };