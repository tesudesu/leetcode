// https://leetcode.com/problems/find-unique-binary-string/

// Cantor's Diagonal Argument
// Two strings are different if they differ by at least one character.

var findDifferentBinaryString = function(nums) {
    let ans = "";
    for (let i = 0; i < nums.length; i++) {
        if (nums[i][i] === "0") {
            ans += "1";
        } else {
            ans += "0";
        }
    }
    return ans;
};


// Recursion

var findDifferentBinaryString = function(nums) {
    let set = new Set(nums);

    let ans = "";

    const backtrack = (str) => {
        if (ans.length > 0) return;
        if (str.length === nums.length) {
            if (!set.has(str)) {
                ans = str;
            }
            return "";
        }

        backtrack(str + "1");
        backtrack(str + "0");
    }

    backtrack("");
    return ans;
};


// Random guess

var findDifferentBinaryString = function(nums) {
    let set = new Set(nums);
    let ans = nums[0];

    while (set.has(ans)) {
        ans = Math.floor(Math.random() * Math.pow(2, nums.length)).toString(2);
        while (ans.length < nums.length) {
            ans = "0" + ans;
        }
    }
    return ans;
};