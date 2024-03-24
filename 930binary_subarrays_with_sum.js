// https://leetcode.com/problems/binary-subarrays-with-sum/

var numSubarraysWithSum = function(nums, goal) {
    const map = new Map();
    map.set(0, 1);

    let prefixSum = 0;
    let tot = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if (map.has(prefixSum - goal)) {
            tot += map.get(prefixSum - goal);
        }
        map.set(prefixSum, (map.get(prefixSum) + 1) || 1);
    }

    return tot;
};


var numSubarraysWithSum = function(nums, goal) {
    const slidingWindowAtMost = (most) => {
        let start = 0;
        let count = 0;
        let currSum = 0;

        for (let i = 0; i < nums.length; i++) {
            currSum += nums[i];

            while (start <= i && currSum > most) {
                currSum -= nums[start];
                start++;
            }

            if (i >= start) {
                count += i - start + 1;
            }
        }

        return count;
    }

    if (goal === 0) {
        return slidingWindowAtMost(goal);
    } else {
        return slidingWindowAtMost(goal) - slidingWindowAtMost(goal - 1);
    }
};