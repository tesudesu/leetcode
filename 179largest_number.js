// https://leetcode.com/problems/largest-number/

var largestNumber = function(nums) {
    let strings = Array(nums.length).fill();
    let zeros = 0;

    for (let i = 0; i < nums.length; i++) {
        strings[i] = String(nums[i]);
        if (nums[i] === 0) {
            zeros++;
        }
    }

    if (zeros === nums.length) {
        return "0";
    }

    strings.sort((str1, str2) => {
        let p1 = 0;
        let p2 = 0;

        let max = Math.max(str1.length, str2.length);

        for (let i = 0; i < max * 2; i++) {
            if (str1[p1] > str2[p2]) {
                return -1;
            } else if (str1[p1] < str2[p2]) {
                return 1;
            }
            p1 = (p1 + 1) % str1.length;
            p2 = (p2 + 1) % str2.length;
        }
    })

    let ans = "";

    for (let i = 0; i < strings.length; i++) {
        ans += strings[i];
    }

    return ans;
};


var largestNumber = function(nums) {
    nums = nums.map(a => String(a));

    nums.sort((a, b) => {
        let i = 0;
        let once = false;

        while (true) {
            if (i % a.length === 0 && i % b.length === 0) {
                if (once) {
                    return 1;
                } else {
                    once = true;
                }
            }
            if (a[i % a.length] > b[i % b.length]) {
                return -1;
            } else if (a[i % a.length] < b[i % b.length]) {
                return 1;
            }
            i++;
        }
    });

    if (nums[0] === "0") return "0";

    return nums.join("");
};