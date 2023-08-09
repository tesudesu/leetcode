// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

var deleteDuplicates = function(head) {
    let dummy = new ListNode();

    dummy.next = head;

    let dummyCopy = dummy;

    while (dummyCopy.next && dummyCopy.next.next) {
        if (dummyCopy.next.val === dummyCopy.next.next.val) {
            const duplicate = dummyCopy.next.val;
            while (dummyCopy.next && dummyCopy.next.val === duplicate) {
                dummyCopy.next = dummyCopy.next.next;
            }
        } else {
            dummyCopy = dummyCopy.next;
        }
    }

    return dummy.next;
};