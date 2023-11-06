// https://leetcode.com/problems/find-mode-in-binary-search-tree/

// Using hash map, doesn't take advantage of binary search tree

var findMode = function(root) {
    const freq = new Map();

    const getValue = (node) => {
        if (!node) return;
        freq.set(node.val, (freq.get(node.val) + 1) || 1);
        getValue(node.left);
        getValue(node.right);
    }

    getValue(root);

    let valueToFreq = [...freq];
    valueToFreq.sort((a, b) => b[1] - a[1]);

    let ans = [valueToFreq[0][0]];

    for (let i = 1; i < valueToFreq.length; i++) {
        if (valueToFreq[i][1] === valueToFreq[i - 1][1]) {
            ans.push(valueToFreq[i][0]);
        } else {
            break;
        }
    }

    return ans;
};


// Inorder traversal to get values in sorted order, storing them in an array

var findMode = function(root) {
    let nums = [];

    const inorder = (node) => {
        if (node.left) {
            inorder(node.left);
        }
        nums.push(node.val);
        if (node.right) {
            inorder(node.right);
        }
    }

    inorder(root);

    let maxStreak = 0;
    let currStreak = 1;
    let ans = [];

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            currStreak++;
        } else {
            if (currStreak === maxStreak) {
                ans.push(nums[i - 1]);
            } else if (currStreak > maxStreak) {
                maxStreak = currStreak;
                ans = [nums[i - 1]];
            }
            currStreak = 1;
        }
    }

    return ans;
};


// No storing values in an array

var findMode = function(root) {
    let prev = null;
    let maxStreak = 0;
    let currStreak = 0;
    let ans = [];

    const inorder = (node) => {
        if (node.left) {
            inorder(node.left);
        }

        if (prev === null) {
            prev = node.val;
        }
        if (node.val === prev) {
            currStreak++;
        } else {
            if (currStreak === maxStreak) {
                ans.push(prev);
            } else if (currStreak > maxStreak) {
                maxStreak = currStreak;
                ans = [prev];
            }
            currStreak = 1;
            prev = node.val;
        }

        if (node.right) {
            inorder(node.right);
        }
    }

    inorder(root);

    if (currStreak === maxStreak) {
        ans.push(prev);
    } else if (currStreak > maxStreak) {
        ans = [prev];
    }

    return ans;
};