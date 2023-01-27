// https://leetcode.com/problems/ransom-note/

//  SOLUTION 1

var canConstruct = function(ransomNote, magazine) {
    const mag = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        let ind = mag.indexOf(ransomNote[i]);
        if (ind < 0) {
            return false;
        } else {
            mag[ind] = 0;
        }
    }
    return true;
};

// SOLUTION 2

var canConstruct = function(ransomNote, magazine) {
    let checkedIndices = [];
    for (let i = 0; i < ransomNote.length; i++) {
        for (let j = 0; j < magazine.length; j++) {
            if (ransomNote[i] == magazine[j] && !checkedIndices.includes(j)) {
                checkedIndices.push(j);
                break;
            }
        }  
    }
    return checkedIndices.length == ransomNote.length;
};

// SOLUTION 3

var canConstruct = function(ransomNote, magazine) {
    let checkedIndices = [];
    let checkedIndicesLength = 0;
    for (let i = 0; i < ransomNote.length; i++) {
        for (let j = 0; j < magazine.length; j++) {
            if (ransomNote[i] == magazine[j] && !checkedIndices.includes(j)) {
                checkedIndices.push(j);
                checkedIndicesLength++;
                break;
            }
        }  
        if (checkedIndicesLength != i+1) return false;
    }
    return true;
};