// https://leetcode.com/problems/find-if-array-can-be-sorted/

var canSortArray = function(nums) {
    const countBits = Array(nums.length).fill();

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let bits = 0;

        while (num > 0) {
            if (num & 1) {
                bits++;
            }
            num = num >> 1;
        }

        countBits[i] = bits;
    }

    let mapped = nums.map((a, i) => [a, i]);

    mapped.sort((a, b) => {
        if (a[0] < b[0] && countBits[a[1]] === countBits[b[1]]) {
            return -1;
        }
    });

    for (let i = 1; i < mapped.length; i++) {
        if (mapped[i][0] < mapped[i - 1][0]) {
            return false;
        }
    }

    return true;
};