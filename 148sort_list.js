// https://leetcode.com/problems/sort-list/

// Top-down merge sort

var sortList = function(head) {
    if (!head || !head.next) return head;

    const getMidAndSever = (node) => {
        let fast = node;
        let slow = node;
        let prev = node;

        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        prev.next = null;
        return slow;
    }

    const merge = (list1, list2) => {
        let dummy = new ListNode();
        let dummyCopy = dummy;
        while (list1 && list2) {
            if (list1.val <= list2.val) {
                dummy.next = list1;
                list1 = list1.next;
                dummy = dummy.next;
            } else {
                dummy.next = list2;
                list2 = list2.next;
                dummy = dummy.next;
            }
        }

        if (list1) {
            dummy.next = list1;
        } else if (list2) {
            dummy.next = list2;
        }
        
        return dummyCopy.next;
    }

    const mid = getMidAndSever(head);
    const left = sortList(head);
    const right = sortList(mid);
    return merge(left, right);
};


// Bottom-up merge sort

var sortList = function(head) {
    if (!head || !head.next) return head;

    const getCount = (node) => {
        let count = 0;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    const split = (node, size) => {
        if (!node) return null;

        for (let i = 1; i < size && node.next; i++) {
            node = node.next;
        }

        const right = node.next;
        node.next = null;
        return right;
    }

    const merge = (left, right, tail) => {
        while (left && right) {
            if (left.val <= right.val) {
                tail.next = left;
                left = left.next;
                tail = tail.next;
            } else {
                tail.next = right;
                right = right.next;
                tail = tail.next;
            }
        }

        if (left) {
            tail.next = left;
        } else if (right) {
            tail.next = right;
        }

        while (tail.next) {
            tail = tail.next;
        }

        return tail;
    }

    const n = getCount(head);
    let dummy = new ListNode();
    dummy.next = head;

    for (let i = 1; i < n; i *= 2) {
        let curr = dummy.next;
        let tail = dummy;

        while (curr) {
            const left = curr;
            const right = split(left, i);
            curr = split(right, i);
            tail = merge(left, right, tail);
        }
    }

    return dummy.next;
};


// var sortList = function(head) {
//     let nums = [];

//     let dummy = head;

//     while (dummy) {
//         nums.push(dummy.val);
//         dummy = dummy.next;
//     }

//     nums.sort((a, b) => a - b);

//     dummy = head;

//     let i = 0;

//     while (dummy) {
//         dummy.val = nums[i];
//         dummy = dummy.next;
//         i++;
//     }

//     return head;
// };