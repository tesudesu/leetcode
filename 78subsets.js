// https://leetcode.com/problems/subsets/

var subsets = function(nums) {
    let ans = [];

    const backtrack = (currArr, ind) => {
        if (currArr.length > nums.length) return;
        ans.push(currArr.slice());
        for (let i = ind; i < nums.length; i++) {
            currArr.push(nums[i]);
            backtrack(currArr, i + 1);
            currArr.pop();
        }
    }

    backtrack([], 0);

    return ans;
};


var subsets = function(nums) {
    let ans = [[]];
    let currSubset = [];

    const dfs = (i) => {
        if (i === nums.length) {
            return;
        }

        for (let j = i; j < nums.length; j++) {
            currSubset.push(nums[j]);
            ans.push(currSubset.slice());
            dfs(j + 1);
            currSubset.pop();
        }
    }

    dfs(0);

    return ans;
};


var subsets = function(nums) {
    let ans = [[]];

    for (const num of nums) {
        let length = ans.length;
        for (let i = 0; i < length; i++) {
            let newSubset = ans[i].slice();
            newSubset.push(num);
            ans.push(newSubset);
        }
    }

    return ans;
};