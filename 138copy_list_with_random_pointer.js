// https://leetcode.com/problems/copy-list-with-random-pointer/

var copyRandomList = function(head) {
    if (!head) {
        return null;
    }
    
    let map = new Map();

    let prev = new Node();

    const dummy = prev;

    let head2 = head;

    while (head) {
        let node = new Node(head.val);
        map.set(head, node);
        prev.next = node;
        prev = prev.next;
        head = head.next;
    }

    let dummy2 = dummy.next;

    while (head2) {
        const random = head2.random;
        const randomCopy = map.get(random);
        dummy2.random = randomCopy;
        head2 = head2.next;
        dummy2 = dummy2.next;
    }

    return dummy.next;
};