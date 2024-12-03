// https://leetcode.com/problems/sentence-similarity-iii/

var areSentencesSimilar = function(sentence1, sentence2) {
    let shorter = sentence1.length <= sentence2.length ? sentence1 : sentence2;
    let longer = sentence1.length > sentence2.length ? sentence1 : sentence2;

    shorter = shorter.split(" ");
    longer = longer.split(" ");

    let p = 0;

    while (p < shorter.length && shorter[p] === longer[p]) {
        p++;
    }

    if (p === shorter.length) {
        return true;
    }

    let shorterEnd = shorter.length - 1;
    let longerEnd = longer.length - 1;

    while (shorterEnd >= p && shorter[shorterEnd] === longer[longerEnd]) {
        shorterEnd--;
        longerEnd--;
    }

    if (shorterEnd < p) {
        return true;
    }

    return false;
};