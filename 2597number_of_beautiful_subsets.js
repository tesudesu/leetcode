// https://leetcode.com/problems/the-number-of-beautiful-subsets/

// DP (like house robber)

var beautifulSubsets = function(nums, k) {
    const counts = new Map();
    const groups = new Map();

    for (let i = 0; i < nums.length; i++) {
        counts.set(nums[i], (counts.get(nums[i]) + 1) || 1);
        const remainder = nums[i] % k;
        if (groups.has(remainder)) {
            const set = groups.get(remainder);
            set.add(nums[i]);
            groups.set(remainder, set);
        } else {
            const set = new Set();
            set.add(nums[i]);
            groups.set(remainder, set);
        }
    }

    let ans = 1;

    for (const [remainder, set] of groups) {
        let group = [...set];
        group.sort((a, b) => a - b);

        const groupCounts = Array(group.length + 1).fill(1);
        
        for (let i = group.length - 1; i >= 0; i--) {
            let skip = groupCounts[i + 1];
            let take = Math.pow(2, counts.get(group[i])) - 1;
            if (i + 1 < group.length && group[i + 1] - group[i] === k) { // cannot take next number
                take *= groupCounts[i + 2];
            } else { // can take next number as well
                take *= groupCounts[i + 1];
            }
            groupCounts[i] = skip + take;
        }
        
        ans *= groupCounts[0];
    }

    return ans - 1;
};


// Backtracking

var beautifulSubsets = function(nums, k) {
    let tot = 0;

    const dfs = (i, arr) => {
        if (i === nums.length) {
            if (arr.length > 0) {
                tot++;
            }
            return;
        }

        let has = false;

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === nums[i] - k || arr[j] === nums[i] + k) {
                has = true;
                break;
            }
        }

        if (!has) {
            if (i + 1 === nums.length) {
                tot++;
            } else {
                arr.push(nums[i]);
                dfs(i + 1, arr);
                arr.pop();
            }
        }

        dfs(i + 1, arr);
    }

    dfs(0, []);

    return tot;
};


var beautifulSubsets = function(nums, k) {
    const map = new Map();

    const dfs = (i) => {
        if (i === nums.length) {
            return 1;
        }

        let res = dfs(i + 1);

        if (!map.has(nums[i] + k) && !map.has(nums[i] - k)) {
            map.set(nums[i], (map.get(nums[i]) + 1) || 1);
            res += dfs(i + 1);
            map.set(nums[i], map.get(nums[i]) - 1);
            if (map.get(nums[i]) === 0) {
                map.delete(nums[i]);
            }
        }

        return res;
    }

    return dfs(0) - 1;
};