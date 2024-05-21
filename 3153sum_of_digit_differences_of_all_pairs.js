// https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/

var sumDigitDifferences = function(nums) {
    let length = String(nums[0]).length;
    let strings = Array(nums.length).fill();

    for (let i = 0; i < nums.length; i++) {
        strings[i] = String(nums[i]);
    }

    let ans = 0;

    for (let i = 0; i < length; i++) {
        let counts = Array(10).fill(0);
        for (let j = 0; j < strings.length; j++) {
            counts[Number(strings[j][i])]++;
        }

        let tot = nums.length;
        let arr = [];
        for (let k = 0; k < counts.length; k++) {
            if (counts[k] > 0) {
                arr.push(counts[k]);
            }
        }
        for (let k = 0; k < arr.length - 1; k++) {
            ans += (tot - arr[k]) * arr[k];
            tot -= arr[k];
        }
    }

    return ans;
};