// https://leetcode.com/problems/sort-characters-by-frequency/

var frequencySort = function(s) {
    let freq = {};
    for (let i = 0; i < s.length; i++) {
        freq[s[i]] = (freq[s[i]] + 1) || 1;
    }
    let arr = Object.entries(freq);
    arr.sort((a, b) => b[1] - a[1]);
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i][1]; j++) {
            ans.push(arr[i][0]);
        }
    }
    return ans.join("");
};


// var frequencySort = function(s) {
//     let freq = {};
//     for (let i = 0; i < s.length; i++) {
//         freq[s[i]] = (freq[s[i]] + 1) || 1;
//     }
//     let arr = Object.entries(freq);
//     arr.sort((a, b) => b[1] - a[1]);
//     let ans = "";
//     for (let i = 0; i < arr.length; i++) {
//         ans += arr[i][0].repeat(arr[i][1]);
//     }
//     return ans;
// };


// Bucket sort

var frequencySort = function(s) {
    let freq = {};
    for (let i = 0; i < s.length; i++) {
        freq[s[i]] = (freq[s[i]] + 1) || 1;
    }

    let buckets = Array(s.length + 1).fill().map(() => Array().fill());
    for (const letter in freq) {
        buckets[freq[letter]].push(letter);
    }

    let ans = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        for (let j = 0; j < buckets[i].length; j++) {
            for (let k = 0; k < i; k++) {
                ans.push(buckets[i][j]);
            }
        }
    }

    return ans.join("");
};