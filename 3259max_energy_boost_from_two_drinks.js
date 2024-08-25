// https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/

var maxEnergyBoost = function(energyDrinkA, energyDrinkB) {
    const n = energyDrinkA.length;
    const consumeA = Array(n).fill();
    const consumeB = Array(n).fill();
    consumeA[0] = energyDrinkA[0];
    consumeB[0] = energyDrinkB[0];

    for (let i = 1; i < n; i++) {
        consumeA[i] = Math.max(energyDrinkA[i] + consumeA[i - 1], consumeB[i - 1]);
        consumeB[i] = Math.max(energyDrinkB[i] + consumeB[i - 1], consumeA[i - 1]);
    }

    return Math.max(consumeA[n - 1], consumeB[n - 1]);
};