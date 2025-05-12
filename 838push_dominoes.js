// https://leetcode.com/problems/push-dominoes/

var pushDominoes = function(dominoes) {
    let blank = 0;
    let ans = [];

    let i = 0;

    while (i < dominoes.length) {
        if (dominoes[i] === ".") {
            blank++;
            i++;
        } else if (dominoes[i] === "L") {
            for (let j = 0; j <= blank; j++) {
                ans.push("L");
            }
            blank = 0;
            i++;
        } else if (dominoes[i] === "R") {
            for (let k = 0; k < blank; k++) {
                ans.push(".");
            }

            blank = 0;

            let j = i + 1;

            ans.push("R");

            while (j < dominoes.length) {
                if (dominoes[j] === ".") {
                    blank++;
                } else {
                    break;
                }
                j++;
            }
            
            if (j === dominoes.length || dominoes[j] === "R") {
                for (let k = 0; k < blank; k++) {
                    ans.push("R");
                }
            } else {
                if (blank % 2 === 0) {
                    for (let k = 0; k < blank / 2; k++) {
                        ans.push("R");
                    }
                    for (let k = 0; k < blank / 2; k++) {
                        ans.push("L");
                    }
                } else {
                    for (let k = 0; k < Math.floor(blank / 2); k++) {
                        ans.push("R");
                    }
                    ans.push(".");
                    for (let k = 0; k < Math.floor(blank / 2); k++) {
                        ans.push("L");
                    }
                }
            }

            blank = 0;
            i = j;
        }
    }

    for (let i = 0; i < blank; i++) {
        ans.push(".");
    }

    return ans.join("");
};