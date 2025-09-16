// https://leetcode.com/problems/vowel-spellchecker/

var spellchecker = function(wordlist, queries) {
    const exact = new Set(wordlist);
    const cap = new Map();
    const vowelErrors = new Map();

    for (let i = 0; i < wordlist.length; i++) {
        const lower = wordlist[i].toLowerCase();
        if (!cap.has(lower)) {
            cap.set(lower, wordlist[i]);
        }
        const ignoreVowels = lower.replaceAll(/[aeiou]/g, "a");
        if (!vowelErrors.has(ignoreVowels)) {
            vowelErrors.set(ignoreVowels, wordlist[i]);
        }
    }

    const ans = Array(queries.length).fill("");

    for (let i = 0; i < queries.length; i++) {
        if (exact.has(queries[i])) {
            ans[i] = queries[i];
            continue;
        }
        const lower = queries[i].toLowerCase();
        if (cap.has(lower)) {
            ans[i] = cap.get(lower);
            continue;
        }
        const ignoreVowels = lower.replaceAll(/[aeiou]/g, "a");
        if (vowelErrors.has(ignoreVowels)) {
            ans[i] = vowelErrors.get(ignoreVowels);
        }
    }

    return ans;
};