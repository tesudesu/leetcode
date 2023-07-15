// https://leetcode.com/problems/maximize-the-confusion-of-an-exam/

var maxConsecutiveAnswers = function(answerKey, k) {
    let longest = 0;
    let trues = 0;
    let falses = 0;
    let left = 0;

    for (let i = 0; i < answerKey.length; i++) {
        if (answerKey[i] === 'T') {
            trues++;
        } else {
            falses++;
        }

        while (Math.min(trues, falses) > k) {
            if (answerKey[left] === 'T') {
                trues--;
            } else {
                falses--;
            }
            left++;
        }

        longest = Math.max(longest, trues + falses);
    }

    return longest;
};