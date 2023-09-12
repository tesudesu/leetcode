// https://leetcode.com/problems/split-linked-list-in-parts/

var splitListToParts = function(head, k) {
    let length = 0;

    let dummy = head;

    while (dummy) {
        length++;
        dummy = dummy.next;
    }

    const quotient = Math.floor(length / k);

    let groupSizes = Array(k).fill(quotient);

    let remainder = length % k;

    let i = 0;

    while (remainder > 0) {
        groupSizes[i]++;
        i++;
        remainder--;
    }

    let ans = [];

    for (let i = 0; i < groupSizes.length; i++) {
        if (groupSizes[i] === 0) {
            ans.push(null);
        } else {
            let list = head;
            let num = groupSizes[i];
            while (num > 1) {
                head = head.next;
                num--;
            }
            const temp = head.next;
            head.next = null;
            head = temp;
            ans.push(list);
        }
    }

    return ans;
};