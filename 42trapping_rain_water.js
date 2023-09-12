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

// var trap = function(height) {
//     let maxLeft = Array(height.length).fill(0);
//     let maxRight = Array(height.length).fill(0);

//     for (let i = 1; i < height.length; i++) {
//         maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
//     }

//     for (let i = height.length - 2; i >= 0; i--) {
//         maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
//     }

//     let tot = 0;

//     for (let i = 0; i < height.length; i++) {
//         let diff = Math.min(maxLeft[i], maxRight[i]) - height[i];
//         tot += diff > 0 ? diff : 0;
//     }

//     return tot;
// };


// O(1) space, O(n) time

// var trap = function(height) {
//     let tot = 0;

//     let left = 0
//     let right = height.length - 1;

//     let maxLeft = 0;
//     let maxRight = 0;

//     while (left <= right) {
//         if (maxLeft <= maxRight) {
//             const diff = maxLeft - height[left];
//             tot += diff > 0 ? diff : 0;
//             maxLeft = Math.max(maxLeft, height[left]);
//             left++;
//         } else {
//             const diff = maxRight - height[right];
//             tot += diff > 0 ? diff : 0;
//             maxRight = Math.max(maxRight, height[right]);
//             right--;
//         }
//     }

//     return tot;
// };