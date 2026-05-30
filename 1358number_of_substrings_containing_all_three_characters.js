// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

var numberOfSubstrings = function(s) {
    const count = Array(3).fill(0);

    const hasAll = () => {
        for (const num of count) {
            if (num === 0) {
                return false;
            }
        }
        return true;
    }

    let ans = 0;
    let left = 0;

    for (let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) - 97;
        count[index]++;
        while (hasAll()) {
            ans += s.length - i;
            let leftIndex = s.charCodeAt(left) - 97;
            count[leftIndex]--;
            left++;
        }
    }

    return ans;
};