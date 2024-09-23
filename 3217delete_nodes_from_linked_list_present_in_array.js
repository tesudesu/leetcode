// https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/

var modifiedList = function(nums, head) {
    const set = new Set(nums);

    let list = new ListNode();
    list.next = head;

    let dummy = list;

    while (dummy && dummy.next) {
        while (dummy && dummy.next && set.has(dummy.next.val)) {
            dummy.next = dummy.next.next;
        }
        dummy = dummy.next;
    }

    return list.next;
};