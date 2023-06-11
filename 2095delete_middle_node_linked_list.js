// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

var deleteMiddle = function(head) {
    if (head.next === null) return null;
    
    let curr = head;
    let tot = 0;

    while (curr) {
        curr = curr.next;
        tot++;
    }

    const mid = Math.floor(tot/2);

    curr = head;
    let dummy = curr;

    for (let i = 0; i < mid-1; i++) {
        curr = curr.next;
    }

    let skip = curr;
    skip = skip.next;
    skip = skip.next;
    curr.next = skip;

    return dummy;
};