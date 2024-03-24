// https://leetcode.com/problems/merge-in-between-linked-lists/

var mergeInBetween = function(list1, a, b, list2) {
    let dummy1 = list1;
    let dummy2 = list1;

    b -= a;

    while (a > 1) {
        dummy1 = dummy1.next;
        dummy2 = dummy2.next;
        a--;
    }

    while (b > -1) {
        dummy2 = dummy2.next;
        b--;
    }

    dummy1.next = list2;

    while (dummy1.next) {
        dummy1 = dummy1.next;
    }

    dummy1.next = dummy2.next;
    dummy2.next = null;

    return list1;
};