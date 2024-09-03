// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/

var getLucky = function(s, k) {
    let nums = Array(s.length).fill();
    let sum = 0; 

    for (let i = 0; i < s.length; i++) {
        nums[i] = s.charCodeAt(i) - 96;
        while (nums[i] > 0) {
            sum += nums[i] % 10;
            nums[i] = Math.floor(nums[i] / 10);
        }
    }

    for (let i = 0; i < k - 1; i++) {
        let newSum = 0;
        while (sum > 0) {
            newSum += sum % 10;
            sum = Math.floor(sum / 10);
        }
        sum = newSum;
    }

    return sum;
};