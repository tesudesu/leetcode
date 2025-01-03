// https://leetcode.com/problems/number-of-ways-to-select-buildings/

var numberOfWays = function(s) {
    const arr = [];
    let num = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            num++;
        } else {
            arr.push(num);
            num = 1;
        }
    }

    arr.push(num);

    const n = arr.length;

    const zeroFromLeft = Array(n).fill(0);
    const zeroFromRight = Array(n).fill(0);
    const oneFromLeft = Array(n).fill(0);
    const oneFromRight = Array(n).fill(0);

    if (s[0] === "0") {
        zeroFromLeft[0] = arr[0];
        oneFromLeft[0] = 0;
    } else {
        zeroFromLeft[0] = 0;
        oneFromLeft[0] = arr[0];
    }

    for (let i = 1; i < n; i++) {
        if (s[0] === "0") {
            if (i % 2 === 0) {
                zeroFromLeft[i] = arr[i] + zeroFromLeft[i - 1];
                oneFromLeft[i] = oneFromLeft[i - 1];
            } else {
                zeroFromLeft[i] = zeroFromLeft[i - 1];
                oneFromLeft[i] = oneFromLeft[i - 1] + arr[i];
            }
        } else {
            if (i % 2 === 0) {
                zeroFromLeft[i] = zeroFromLeft[i - 1];
                oneFromLeft[i] = oneFromLeft[i - 1] + arr[i];
            } else {
                zeroFromLeft[i] = arr[i] + zeroFromLeft[i - 1];
                oneFromLeft[i] = oneFromLeft[i - 1];
            }
        }
    }

    if (s[s.length - 1] === "0") {
        zeroFromRight[n - 1] = arr[n - 1];
        oneFromRight[n - 1] = 0;
    } else {
        zeroFromRight[n - 1] = 0;
        oneFromRight[n - 1] = arr[n - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        if (s[0] === "0") {
            if (i % 2 === 0) {
                zeroFromRight[i] = arr[i] + zeroFromRight[i + 1];
                oneFromRight[i] = oneFromRight[i + 1];
            } else {
                zeroFromRight[i] = zeroFromRight[i + 1];
                oneFromRight[i] = oneFromRight[i + 1] + arr[i];
            }
        } else {
            if (i % 2 === 0) {
                zeroFromRight[i] = zeroFromRight[i + 1];
                oneFromRight[i] = oneFromRight[i + 1] + arr[i];
            } else {
                zeroFromRight[i] = arr[i] + zeroFromRight[i + 1];
                oneFromRight[i] = oneFromRight[i + 1];
            }
        }
    }

    let tot = 0;

    for (let i = 1; i < n - 1; i++) {
        if (s[0] === "0") {
            if (i % 2 !== 0) {
                tot += zeroFromLeft[i] * zeroFromRight[i] * arr[i];
            } else {
                tot += oneFromLeft[i] * oneFromRight[i] * arr[i];
            }
        } else {
            if (i % 2 !== 0) {
                tot += oneFromLeft[i] * oneFromRight[i] * arr[i];
            } else {
                tot += zeroFromLeft[i] * zeroFromRight[i] * arr[i];
            }
        }
    }

    return tot;
};