// https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/

var minimizeStringValue = function(s) {
    const counts = Array(26).fill(0);
    let questions = [];
    let numOfQuestions = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "?") {
            counts[s.charCodeAt(i) - 97]++;
        } else {
            numOfQuestions++;
        }
    }

    while (numOfQuestions > 0) {
        let minCount = Infinity;
        let min;
        for (let j = 0; j < counts.length; j++) {
            if (counts[j] < minCount) {
                minCount = counts[j];
                min = j;
            }
        }
        questions.push(String.fromCharCode(min + 97));
        counts[min]++;
        numOfQuestions--;
    }

    questions.sort();

    let j = 0;

    let ans = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "?") {
            ans.push(s[i]);
        } else {
            ans.push(questions[j]);
            j++;
        }
    }

    return ans.join("");
};