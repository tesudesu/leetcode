// https://leetcode.com/problems/sum-game/

var sumGame = function(num) {
    let leftSum = 0;
    let rightSum = 0

    let questionsLeft = 0;
    let questionsRight = 0;

    for (let i = 0; i < num.length / 2; i++) {
        if (num[i] === "?") {
            questionsLeft++;
        } else {
            leftSum += Number(num[i]);
        }
    }

    for (let i = num.length / 2; i < num.length; i++) {
        if (num[i] === "?") {
            questionsRight++;
        } else {
            rightSum += Number(num[i]);
        }
    }

    const same = Math.min(questionsLeft, questionsRight);

    questionsLeft -= same;
    questionsRight -= same;

    if ((questionsLeft + questionsRight) % 2 === 1) return true;

    if (questionsLeft + questionsRight === 0) return leftSum !== rightSum;

    if (questionsLeft === 0 && rightSum > leftSum) return true;
    if (questionsRight === 0 && leftSum > rightSum) return true;

    const questionsDiff = Math.abs(questionsLeft - questionsRight);

    if (Math.abs(leftSum - rightSum) === (questionsDiff / 2) * 9) return false;

    return true;
};