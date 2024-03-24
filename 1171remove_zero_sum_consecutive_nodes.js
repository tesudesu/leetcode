// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/

// O(n^2) time

var removeZeroSumSublists = function(head) {
    let list = new ListNode();
    list.next = head;

    let pointer = list;
    while (pointer && pointer.next) {
        let dummy = pointer.next;
        let sum = 0;
        while (dummy) {
            sum += dummy.val;
            if (sum === 0) {
                pointer.next = dummy.next;
                sum = 0;
            }
            dummy = dummy.next;
        }
        pointer = pointer.next;
    }

    return list.next;
};


// O(n) time

var removeZeroSumSublists = function(head) {
    let list = new ListNode();
    list.next = head;
    const map = new Map();
    map.set(0, list);

    let dummy = list.next;
    let prefixSum = 0;

    while (dummy) {
        prefixSum += dummy.val;

        if (map.has(prefixSum)) {
            let prev = map.get(prefixSum);
            dummy = prev.next;

            let p = prefixSum + dummy.val;
            while (p !== prefixSum) {
                map.delete(p);
                dummy = dummy.next;
                p += dummy.val;
            }
            prev.next = dummy.next;
        } else {
            map.set(prefixSum, dummy);
        }

        dummy = dummy.next;
    }

    return list.next;
};