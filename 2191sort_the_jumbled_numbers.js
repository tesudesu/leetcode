// https://leetcode.com/problems/sort-the-jumbled-numbers/

var sortJumbled = function(mapping, nums) {
    let mapped = Array(nums.length).fill();

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num === 0) {
            mapped[i] = [mapping[0], i];
            continue;
        }
        let newNum = 0;
        let place = 1;
        while (num > 0) {
            let newDigit = mapping[num % 10];
            newNum += newDigit * place;
            num = Math.floor(num / 10);
            place *= 10;
        }
        mapped[i] = [newNum, i];
    }

    mapped.sort((a, b) => a[0] - b[0]);

    let ans = Array(nums.length).fill();

    for (let i = 0; i < ans.length; i++) {
        ans[i] = nums[mapped[i][1]];
    }

    return ans;
};