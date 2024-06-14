// https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/

var numberOfChild = function(n, k) {
    let direction = Math.floor(k / (n - 1));
    let personFromDirection = k % (n - 1);

    if (direction % 2 === 0) {
        return personFromDirection;
    } else {
        return n - 1 - personFromDirection;
    }
};