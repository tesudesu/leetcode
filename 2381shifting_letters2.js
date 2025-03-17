// https://leetcode.com/problems/shifting-letters-ii/

var shiftingLetters = function(s, shifts) {
    const diffArray = Array(s.length).fill(0);

    for (const [start, end, shift] of shifts) {
        if (shift === 1) {
            diffArray[start]++;
            if (end + 1 < diffArray.length) {
                diffArray[end + 1]--;
            }
        } else {
            diffArray[start]--;
            if (end + 1 < diffArray.length) {
                diffArray[end + 1]++;
            }
        }
    }
    
    let ans = [];
    let diff = 0;

    for (let i = 0; i < s.length; i++) {
        diff = (diff + diffArray[i]) % 26;
        if (diff < 0) diff += 26;
        let code = 97 + ((s.charCodeAt(i) - 97 + diff) % 26);
        ans.push(String.fromCharCode(code));
    }

    return ans.join("");
};