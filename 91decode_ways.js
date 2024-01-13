// https://leetcode.com/problems/decode-ways/

// Top-down DP

var numDecodings = function(s) {
    const cache = Array(s.length).fill(-1);

    const dp = (i) => {
        if (s[i] === "0") {
            return 0;
        }

        if (i === s.length) {
            return 1;
        }

        if (cache[i] !== -1) {
            return cache[i];
        }

        let sum = dp(i + 1);
        
        if (i + 1 < s.length && (s[i] === "1" || (s[i] === "2" && s[i + 1] <= "6"))) {
            sum += dp(i + 2);
        }

        cache[i] = sum;

        return sum;
    }

    return dp(0);
};


var numDecodings = function(s) {
    const cache = Array(s.length).fill(-1);

    const dp = (i) => {
        if (s[i] === "0") {
            return 0;
        }

        if (i === s.length - 1) {
            return 1;
        }

        if (i === s.length - 2) {
            if (s[i + 1] !== "0" && (s[i] === "1" || (s[i] === "2" && s[i + 1] <= "6"))) {
                return 2;
            } else if (s[i + 1] !== "0" || (s[i] === "1" || (s[i] === "2" && s[i + 1] <= "6"))) {
                return 1;
            } else {
                return 0;
            }
        }

        if (cache[i] !== -1) {
            return cache[i];
        }

        let sum = dp(i + 1);
        
        if (i + 1 < s.length && (s[i] === "1" || (s[i] === "2" && s[i + 1] <= "6"))) {
            sum += dp(i + 2);
        }

        cache[i] = sum;

        return sum;
    }

    return dp(0);
};


// Bottom-up DP

var numDecodings = function(s) {
    const dp = Array(s.length + 1).fill();
    dp[dp.length - 1] = 1;

    for (let i = dp.length - 2; i >= 0; i--) {
        if (s[i] === "0") {
            dp[i] = 0;
            continue;
        }
        dp[i] = dp[i + 1];
        if (i + 1 < s.length && (s[i] === "1" || (s[i] === "2" && s[i + 1] <= "6"))) {
            dp[i] += dp[i + 2];
        }
    }

    return dp[0];
};


// Backtrack

// var numDecodings = function(s) {
//     let tot = 0;

//     const bt = (i) => {
//         if (s[i] === "0") {
//             return;
//         }

//         if (i === s.length - 1) {
//             tot++;
//             return;
//         }

//         if (i === s.length - 2) {
//             if (s[i] === "1" || (s[i] === "2" && s[i + 1] <= "6")) {
//                 tot++;
//             }
//             if (s[i + 1] !== "0") {
//                 tot++;
//             }
//             return;
//         }

//         bt(i + 1);
        
//         if (i + 1 < s.length && (s[i] === "1" || (s[i] === "2" && s[i + 1] <= "6"))) {
//             bt(i + 2);
//         }
//     }

//     bt(0);

//     return tot;
// };