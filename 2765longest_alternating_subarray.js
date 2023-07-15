// https://leetcode.com/problems/longest-alternating-subarray/

var alternatingSubarray = function(nums) {
    let longest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums.length - i <= longest) break;
        let temp = 0;
        let hill = true;
        let last = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (hill) {
                if (nums[j] === last + 1) {
                    temp++;
                    hill = false;
                    last = nums[j];
                } else {
                    break;
                }
            } else {
                if (nums[j] === last - 1) {
                    temp++;
                    hill = true;
                    last = nums[j];
                } else {
                    break;
                }
            }
        }
        longest = Math.max(longest, temp);
    }

    return longest === 0 ? - 1 : longest + 1;
};