// https://leetcode.com/problems/reverse-vowels-of-a-string/

var reverseVowels = function(s) {
    let vowels = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' | s[i] == 'e' | s[i] == 'i' | s[i] == 'o' | s[i] == 'u' | s[i] == 'A' | s[i] == 'E' | s[i] == 'I' | s[i] == 'O' | s[i] == 'U') {
            vowels.push(i);
        }
    }
    const S = s.split('');
    for (let i = 0; i < vowels.length/2; i++) {
        let temp = s[vowels[i]];
        S[vowels[i]] = S[vowels[vowels.length - 1 - i]];
        S[vowels[vowels.length - 1 - i]] = temp;
    }
    return S.join('');
};
