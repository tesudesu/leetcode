// https://leetcode.com/problems/self-dividing-numbers/

var selfDividingNumbers = function(left, right) {
    function isSelfDividing(num) {
        let arr = num.toString().split('');
        for (let i = 0; i < arr.length; i++) {
            if (num % arr[i] !== 0) {
                return false;
            }
        }
        return true;
    }
    let res =  [];
    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) {
            res.push(i);
        }
    }
    return res;
}; 