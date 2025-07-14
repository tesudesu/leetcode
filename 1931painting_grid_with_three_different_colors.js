// https://leetcode.com/problems/painting-a-grid-with-three-different-colors/

var colorTheGrid = function(m, n) {
    const mod = 1e9 + 7;

    let combos = [];

    let curr = [];
    
    const bt = () => {
        if (curr.length === m) {
            combos.push(curr.slice());
            return;
        }

        for (let i = 0; i <= 2; i++) {
            if (curr.length === 0 || curr[curr.length - 1] !== i) {
                curr.push(i);
                bt();
                curr.pop();
            }
        }
    }

    bt();

    const isValid = (arr1, arr2) => {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                return false;
            }
        }
        return true;
    }

    const cache = Array(n).fill().map(() => Array(combos.length).fill(-1));

    const dp = (i, prevComboIndex) => {
        if (i === n) {
            return 1;
        }

        if (prevComboIndex !== -1 && cache[i][prevComboIndex] !== -1) {
            return cache[i][prevComboIndex];
        }

        let tot = 0;

        for (let j = 0; j < combos.length; j++) {
            if (prevComboIndex === -1 || isValid(combos[j], combos[prevComboIndex])) {
                tot = (tot + dp(i + 1, j)) % mod;
            }
        }

        cache[i][prevComboIndex] = tot;

        return tot;
    }

    return dp(0, -1);
};