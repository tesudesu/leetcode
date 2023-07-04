// https://leetcode.com/problems/word-break/

// Top down DP

var wordBreak = function(s, wordDict) {
    let dp = Array(s.length).fill(false);
    
    for (let i = 0; i < s.length; i++) {
        const substring = s.slice(0, i + 1);
        for (let j = 0; j < wordDict.length; j++) {
            const wordLength = wordDict[j].length;
            if (wordLength <= i + 1 && substring.slice(-wordLength) === wordDict[j]) {
                if (i - wordLength < 0 || dp[i - wordLength]) {
                    dp[i] = true;
                    break;
                }
            }
        }
    }

    return dp[s.length - 1];
};


// BFS

// var wordBreak = function(s, wordDict) {
//     let set = new Set(wordDict);

//     let queue = [0];

//     let seen = new Set();

//     while (queue.length > 0) {
//         const start = queue.pop();

//         if (start === s.length) return true;

//         for (let i = start + 1; i <= s.length; i++) {
//             if (seen.has(i)) continue;

//             if (set.has(s.slice(start, i))) {
//                 queue.push(i);
//                 seen.add(i);
//             }
//         }
//     }

//     return false;
// };


// Bottom up DP

// var wordBreak = function(s, wordDict) {
//     let dp = Array(s.length + 1);

//     dp[s.length] = true;

//     for (i = dp.length - 2; i >= 0; i--) {
//         const substring = s.slice(i);
//         for (let j = 0; j < wordDict.length; j++) {
//             if (substring.indexOf(wordDict[j]) === 0 && dp[i + wordDict[j].length] === true) {
//                 dp[i] = true;
//                 break;
//             }
//         }
//         if (dp[i] !== true) dp[i] = false;
//     }

//     return dp[0];
// };