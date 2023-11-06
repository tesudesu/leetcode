// https://leetcode.com/problems/find-the-winner-of-an-array-game/

var getWinner = function(arr, k) {
    if (k >= arr.length - 1) return Math.max(...arr);

    let maxWins = Array(arr.length).fill(0);
    let prev = Infinity;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                maxWins[i]++;
            } else {
                break;
            }
        }
        if (arr[i] > prev) {
            maxWins[i]++;
        }
        if (maxWins[i] >= k) {
            return arr[i];
        }
        prev = arr[i];
    }

    return Math.max(...arr);
};