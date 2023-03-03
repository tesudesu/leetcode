// https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/

var minMaxDifference = function(num) {

    let arrMin = num.toString().split('');
    let arrMax = arrMin.slice();
    const start = arrMin[0];
    for (let i = 0; i < arrMin.length; i++) {
        if (arrMin[i] == start) {
            arrMin[i] = '0';
        }
    }
    const min = Number(arrMin.join(''));
    for (let i = 0; i < arrMax.length; i++) {
        if (arrMax[i] != '9') {
            let ref = arrMax[i];
            for (let j = 1; j < arrMax.length; j++) {
                if (arrMax[j] == ref) {
                    arrMax[j] = '9';
                }
            }
            arrMax[i] = '9';
            break;
        }
    }
    const max = Number(arrMax.join(''));
    return max - min;
};