// https://leetcode.com/problems/minimum-number-of-people-to-teach/

var minimumTeachings = function(n, languages, friendships) {
    for (let lang of languages) {
        lang.sort((a, b) => a - b);
    }

    const cantCommunicate = new Set();

    const checkCommunicate = (arr1, arr2) => {
        let i = 0;
        let j = 0;

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
            if (arr1[i] > arr2[j]) {
                j++;
            } else {
                i++;
            }
        }

        return false;
    }

    for (const [a, b] of friendships) {
        if (!checkCommunicate(languages[a - 1], languages[b - 1])) {
            cantCommunicate.add(a);
            cantCommunicate.add(b);
        }
    }

    let languageCount = Array(n + 1).fill(0);

    for (const person of cantCommunicate) {
        for (const lang of languages[person - 1]) {
            languageCount[lang]++;
        }
    }

    let mostSpoken = Math.max(...languageCount);

    return cantCommunicate.size - mostSpoken;
};