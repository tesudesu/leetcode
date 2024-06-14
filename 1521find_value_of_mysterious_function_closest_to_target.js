// https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/

var closestToTarget = function(arr, target) {
    let min = Infinity;

    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, Math.abs(target - arr[i]));
        if (min === 0) return 0;
        for (let j = i - 1; j >= 0; j--) {
            arr[j] = arr[j] & arr[i];
            min = Math.min(min, Math.abs(target - arr[j]));
            if (min === 0) return 0;
            if (j - 1 >= 0 && arr[j] === arr[j - 1]) {
                break;
            }
        }
    }

    return min;
};