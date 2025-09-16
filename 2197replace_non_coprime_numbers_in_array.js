// https://leetcode.com/problems/replace-non-coprime-numbers-in-array/

var replaceNonCoprimes = function(nums) {
    const findGCD = (num1, num2) => {
        while (num2 !== 0) {
            let temp = num1;
            num1 = num2;
            num2 = temp % num2;
        }
        return num1;
    }

    let ans = [];
    ans.push(nums[0]);

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];
        while (ans.length > 0 && (gcd = findGCD(curr, ans[ans.length - 1])) > 1) {
            curr = (curr * ans[ans.length - 1]) / gcd;
            ans.pop();
        }
        ans.push(curr);
    }

    return ans;
};