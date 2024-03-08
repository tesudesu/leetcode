// https://leetcode.com/problems/bag-of-tokens/

var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a, b) => a - b);

    let left = 0;
    let right = tokens.length - 1;

    let score = 0;

    while (left < right) {
        if (power >= tokens[left]) {
            power -= tokens[left];
            score++;
            left++;
        } else if (score > 0) {
            power += tokens[right];
            score--;
            right--;
        } else {
            break;
        }
    }

    if (power >= tokens[left]) {
        score++;
    }

    return score;
};