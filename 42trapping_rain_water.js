// https://leetcode.com/problems/trapping-rain-water/

var trap = function(height) {
    let tot = 0;

    let i = 0;

    let lastBorder = 0;

    while (i < height.length) {
        if (height[i] === 0) {
            i++;
            continue;
        }

        let found = false;

        for (let j = i + 1; j < height.length; j++) {
            if (height[j] >= height[i]) {
                found = true;
                for (let k = i + 1; k < j; k++) {
                    tot += height[i] - height[k];
                }
                i = j;
                lastBorder = j;
                break;
            }
        }

        if (!found) break;
    }

    i = height.length - 1;

    while (i >= lastBorder) {
        if (height[i] === 0) {
            i--;
            continue;
        }

        for (let j = i - 1; j >= lastBorder; j--) {
            if (height[j] >= height[i]) {
                for (let k = i - 1; k > j; k--) {
                    tot += height[i] - height[k];
                }
                i = j + 1;
                break;
            }
        }

        i--;
    }

    return tot;
};


// O(n) space, O(n) time

var trap = function(height) {
    const n = height.length;
    const maxLeft = Array(n).fill(0);
    const maxRight = Array(n).fill(0);

    for (let i = 1; i < height.length; i++) {
        maxLeft[i] = Math.max(height[i - 1], maxLeft[i - 1]);
    } 

    for (let i = height.length - 2; i >= 0; i--) {
        maxRight[i] = Math.max(height[i + 1], maxRight[i + 1]);
    }

    let tot = 0;

    for (let i = 0; i < height.length; i++) {
        tot += Math.max(0, Math.min(maxLeft[i], maxRight[i]) - height[i]);
    }

    return tot;
};


// O(1) space, O(n) time

var trap = function(height) {
    let maxLeft = height[0];
    let maxRight = height[height.length - 1];
    let left = 0;
    let right = height.length - 1;
    let tot = 0;

    while (right - left >= 2) {
        if (maxLeft <= maxRight) {
            left++;
            tot += Math.max(0, maxLeft - height[left]);
            maxLeft = Math.max(maxLeft, height[left]);
        } else {
            right--;
            tot += Math.max(0, maxRight - height[right]);
            maxRight = Math.max(maxRight, height[right]);
        }
    }

    return tot;
};