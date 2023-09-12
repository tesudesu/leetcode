// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

var getDecimalValue = function(head) {
    let num = "";
    
    while (head) {
        num += head.val;
        head = head.next;
    }
    
    let tot = 0;
    let exponent = 0;
    
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] === "1") {
            tot += Math.pow(2, exponent);
        }
        exponent++;
    }

    return tot;
};