// https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/

var minDamage = function(power, damage, health) {
    const n = damage.length;
    let tot = 0; 
    let damageDealt = 0;
    let timesToKill = Array(n).fill(0);
    let ratios = Array(n).fill();

    for (let i = 0; i < n; i++) {
        timesToKill[i] = Math.ceil(health[i] / power);
        ratios[i] = [i, damage[i] / timesToKill[i]];
        tot += damage[i];
    }

    ratios.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < n; i++) {
        damageDealt += tot * timesToKill[ratios[i][0]];
        tot -= damage[ratios[i][0]];
    }

    return damageDealt;
};