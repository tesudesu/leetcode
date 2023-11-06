// https://leetcode.com/problems/largest-number/

var largestNumber = function(nums) {
    nums = nums.map(a => String(a));

    nums.sort((a, b) => {
        let i = 0;
        let once = false;

        while (true) {
            if (i % a.length === 0 && i % b.length === 0) {
                if (once) {
                    return 1;
                } else {
                    once = true;
                }
            }
            if (a[i % a.length] > b[i % b.length]) {
                return -1;
            } else if (a[i % a.length] < b[i % b.length]) {
                return 1;
            }
            i++;
        }
    });

    if (nums[0] === "0") return "0";

    return nums.join("");
};