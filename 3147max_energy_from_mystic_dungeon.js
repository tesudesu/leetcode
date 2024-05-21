// https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/

var maximumEnergy = function(energy, k) {
    let ans = -Infinity;

    let energiesAtRemainders = Array(k).fill(0);

    for (let i = energy.length - 1; i >= 0; i--) {
        energiesAtRemainders[i % k] += energy[i];
        ans = Math.max(ans, energiesAtRemainders[i % k]);
    }

    return ans;
};