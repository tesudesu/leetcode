// https://leetcode.com/problems/combination-sum/

var combinationSum = function(candidates, target) {
    let ans = new Set();

    const backtrack = (arr, sum) => {
        if (sum === target) {
            arr.sort((a, b) => (a - b));
            ans.add(arr.join(','));
            return;
        }
        if (sum > target) {
            return;
        }
        
        for (let i = 0; i < candidates.length; i++) {
            let newArr = Array();
            newArr.push(candidates[i]);
            let combinedArr = [...arr, ...newArr];
            backtrack(combinedArr, sum + candidates[i]);
        }
    }

    backtrack([], 0);

    let res = [...ans];

    for (let i = 0; i < res.length; i++) {
        res[i] = res[i].split(',');
    }

    return res;
};