// https://leetcode.com/problems/combination-sum-iii/

var combinationSum3 = function(k, n) {
    let ans = [];

    const backtrack = (num, arr, sum, limit) => {
        if (sum === n && limit === k) {
            ans.push(arr);
            return;
        }
        if (sum > n || limit > k) {
            return;
        }

        let prev = -1;
        for (let i = num; i <= 9; i++) {
            if (i === prev) continue;
            backtrack(i+1, [...arr, num], sum + num, limit + 1);
            prev = num;
            num++;
        }
    }

    backtrack(1, [], 0, 0);

    console.log(...ans)
    return ans;
};