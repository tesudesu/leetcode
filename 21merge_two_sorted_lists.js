var mergeTwoLists = function(list1, list2) {
    let node = new ListNode();
    const dummy = node; // reference to head

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            node.next = list1;
            list1 = list1.next;
        } else {
            node.next = list2;
            list2 = list2.next;
        }
        node = node.next;
    }

    if (list1) {
        node.next = list1;
    } else if (list2) {
        node.next = list2;
    }

    return dummy.next;
};