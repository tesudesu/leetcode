// https://leetcode.com/problems/remove-nodes-from-linked-list/

var removeNodes = function(head) {
    let stack = [];

    let dummy = head;

    while (dummy) {
        while (stack.length > 0 && stack[stack.length - 1].val < dummy.val) {
            stack.pop();
        }
        stack.push(dummy);
        dummy = dummy.next;
    }

    const set = new Set(stack);

    let list = new ListNode();
    list.next = head;

    dummy = list;

    while (dummy && dummy.next) {
        while (!set.has(dummy.next)) {
            dummy.next = dummy.next.next;
        }
        dummy = dummy.next;
    }

    return list.next;
};


var removeNodes = function(head) {
    const reverse = (node) => {
        let prev = null;
        while (node) {
            const temp = node.next;
            node.next = prev;
            prev = node;
            node = temp;
        }
        return prev;
    }

    head = reverse(head);
    let dummy = head;

    let currMax = dummy.val;

    while (dummy.next) {
        if (dummy.next.val < currMax) {
            dummy.next = dummy.next.next;
        } else {
            currMax = dummy.next.val;
            dummy = dummy.next;
        }
    }

    return reverse(head);
};