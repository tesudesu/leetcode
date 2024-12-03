// https://leetcode.com/problems/permutation-in-string/

var checkInclusion = function(s1, s2) {
    let s1freq = Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        s1freq[s1.charCodeAt(i) - 97]++;
    }

    let substringFreq = Array(26).fill(0);

    let left = 0;

    for (let i = 0; i < s2.length; i++) {
        let code = s2.charCodeAt(i) - 97;

        if (s1freq[code] === 0) {
            substringFreq = Array(26).fill(0);
            left = i + 1;
        } else {
            substringFreq[code]++;
            while (substringFreq[code] > s1freq[code]) {
                let leftCode = s2.charCodeAt(left) - 97;
                substringFreq[leftCode]--;
                substringFreq[leftCode] = Math.max(substringFreq[leftCode], 0);
                left++;
            }
        }

        let matched = true;
        for (let j = 0; j < 26; j++) {
            if (s1freq[j] !== substringFreq[j]) {
                matched = false;
                break;
            }
        }
        if (matched) {
            return true;
        }
    }

    return false;
};