// https://leetcode.com/problems/maximum-width-ramp/

// Sorting

var maxWidthRamp = function(nums) {
    nums = nums.map((e, i) => [e, i]);

    nums.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return a[1] < b[1] ? -1 : 1;
        }
    })

    let minIndex = nums[0][1];
    let maxWidth = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i][1] > minIndex) {
            maxWidth = Math.max(maxWidth, nums[i][1] - minIndex);
        } else {
            minIndex = nums[i][1];
        }
    }

    return maxWidth;
};


// 2 Pointers

var maxWidthRamp = function(nums) {
    const n = nums.length;

    let maxFromRight = Array(n).fill();
    maxFromRight[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        maxFromRight[i] = Math.max(nums[i], maxFromRight[i + 1]);
    }

    let maxWidth = 0;

    let left = 0;

    for (let i = 1; i < n; i++) {
        while (maxFromRight[i] < nums[left] && left < i) {
            left++;
        }

        maxWidth = Math.max(maxWidth, i - left);
    }

    return maxWidth;
};


// Monotonic stack

var maxWidthRamp = function(nums) {
    let stack = [0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[stack[stack.length - 1]]) {
            stack.push(i);
        }
    }

    let maxWidth = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && nums[i] >= nums[stack[stack.length - 1]]) {
            maxWidth = Math.max(maxWidth, i - stack[stack.length - 1]);
            stack.pop();
        }
    }

    return maxWidth;
};