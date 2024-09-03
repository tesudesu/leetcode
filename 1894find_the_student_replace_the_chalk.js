// https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/

var chalkReplacer = function(chalk, k) {
    let tot = 0;

    for (let i = 0; i < chalk.length; i++) {
        tot += chalk[i];
    }

    k = k % tot;

    for (let i = 0; i < chalk.length; i++) {
        k -= chalk[i];
        if (k < 0) {
            return i;
        }
    }
};