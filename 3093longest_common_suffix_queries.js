// https://leetcode.com/problems/longest-common-suffix-queries/

// Trie

var stringIndices = function (wordsContainer, wordsQuery) {
    let trie = new TrieNode();
    let defaultIndex;
    let defaultLength = Infinity;

    for (let i = 0; i < wordsContainer.length; i++) {
        let node = trie;
        const word = wordsContainer[i];
        for (let j = word.length - 1; j >= 0; j--) {
            node = node.children;
            const char = word[j];
            if (!node.hasOwnProperty(char)) {
                node[char] = new TrieNode();
            }
            node = node[char];

            if (node.wordLen > word.length) {
                node.wordLen = word.length;
                node.index = i;
            }
        }
        if (word.length < defaultLength) {
            defaultLength = word.length;
            defaultIndex = i;
        }
    }

    trie.index = defaultIndex;

    const ans = Array(wordsQuery.length).fill();

    for (let i = 0; i < wordsQuery.length; i++) {
        let word = wordsQuery[i];
        let node = trie;
        for (let j = word.length - 1; j >= 0; j--) {
            const char = word[j];
            if (!node.children[char]) {
                break;
            }
            node = node.children[char];
        }
        ans[i] = node.index;
    }

    return ans;
};


class TrieNode {
    constructor() {
        this.children = {};
        this.index = -1;
        this.wordLen = Infinity;
    }
}


// Brute force

// var stringIndices = function(wordsContainer, wordsQuery) {
//     const ans = Array(wordsQuery.length).fill(0);

//     let shortestLength = Infinity;
//     let shortest;

//     for (let i = 0; i < wordsContainer.length; i++) {
//         if (wordsContainer[i].length < shortestLength) {
//             shortestLength = wordsContainer[i].length;
//             shortest = i;
//         }
//     }

//     for (let i = 0; i < wordsQuery.length; i++) {
//         let longestIndex = -1;
//         let longestLength = -Infinity;
//         let longestWordLength;
//         for (let j = 0; j < wordsContainer.length; j++) {
//             let k = wordsQuery[i].length - 1;
//             let q = wordsContainer[j].length - 1;
//             let length = 0;
//             while (k >= 0 && q >= 0) {
//                 if (wordsQuery[i][k] === wordsContainer[j][q]) {
//                     length++;
//                 } else {
//                     break;
//                 }
//                 k--;
//                 q--;
//             }

//             if (length > longestLength) {
//                 longestLength = length;
//                 longestIndex = j;
//                 longestWordLength = wordsContainer[j].length;
//             } else if (length === longestLength) {
//                 if (wordsContainer[j].length < longestWordLength) {
//                     longestWordLength = wordsContainer[j].length;
//                     longestIndex = j;
//                 }
//             }
//         }

//         if (longestIndex === -1) {
//             ans[i] = shortest;
//         } else {
//             ans[i] = longestIndex;
//         }
//     }

//     return ans;
// };