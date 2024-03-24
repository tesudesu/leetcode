// https://leetcode.com/problems/find-the-sum-of-encrypted-integers/

var sumOfEncryptedInt = function(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        let digits = [];
        let num = nums[i];
        while (num > 0) {
            digits.push(num % 10);
            num = Math.floor(num / 10);
        }
        const max = Math.max(...digits);
        let len = digits.length;
        let encryptedNum = 0;
        while (len > 0) {
            encryptedNum = encryptedNum * 10 + max;
            len--;
        }
        sum += encryptedNum;
    }

    return sum;
};