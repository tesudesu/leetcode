// https://leetcode.com/problems/count-the-number-of-fair-pairs/

var countFairPairs = function(nums, lower, upper) {
    nums.sort((a, b) => a - b);

    const getUpper = (i, j, num) => {
        let ans = -1;

        while (i <= j) {
            const mid = Math.floor((j - i) / 2) + i;
            if (num + nums[mid] <= upper) {
                ans = mid;
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }

        return ans;
    }

    const getLower = (i, j, num) => {
        let ans = -1;

        while (i <= j) {
            const mid = Math.floor((j - i) / 2) + i;
            if (num + nums[mid] < lower) {
                i = mid + 1;
            } else {
                ans = mid;
                j = mid - 1;
            }
        }

        return ans;
    }

    let tot = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        const upperInd = getUpper(i + 1, nums.length - 1, nums[i]);
        const lowerInd = getLower(i + 1, nums.length - 1, nums[i]);
        if (upperInd === -1 || lowerInd === -1) {
            continue;
        }
        tot += upperInd - lowerInd + 1;
    }

    return tot;
};