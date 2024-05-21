// https://leetcode.com/problems/special-array-ii/

var isArraySpecial = function(nums, queries) {
    queries = queries.map((e, i) => [...e, i]);

    queries.sort((a, b) => a[0] - b[0]);

    let ans = Array(queries.length).fill(true);

    let lastStart = 0;

    for (let i = 0; i < queries.length; i++) {
        const [a, b, index] = queries[i];

        if (a < lastStart && b >= lastStart) {
            ans[index] = false;
            continue;
        }

        let start = Math.max(lastStart, a);
        let even = nums[start] % 2 === 0 ? 1 : -1;

        for (let j = start + 1; j <= b; j++) {
            if (even === 1) {
                if (nums[j] % 2 === 0) {
                    ans[index] = false;
                    lastStart = j;
                    break;
                }
            } else {
                if (nums[j] % 2 === 1) {
                    ans[index] = false;
                    lastStart = j;
                    break;
                }
            }
            even *= -1;
        }
    }

    return ans;
};