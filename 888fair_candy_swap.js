// https://leetcode.com/problems/fair-candy-swap/

var fairCandySwap = function(aliceSizes, bobSizes) {
    let aTot = 0;
    let bTot = 0;
    for (let i = 0; i < aliceSizes.length; i++) {
        aTot += aliceSizes[i];
    }
    for (let i = 0; i < bobSizes.length; i++) {
        bTot += bobSizes[i];
    }
    const even = (aTot + bTot) / 2;
    if (even > aTot) {
        for (let i = 0; i < aliceSizes.length; i++) {
            let need = even - (aTot - aliceSizes[i]);
            if (bobSizes.includes(need) && (bTot - need + aliceSizes[i] === even)) {
                return [aliceSizes[i], need];
            }
        }
    } else {
        for (let i = 0; i < bobSizes.length; i++) {
            let need = even - (bTot - bobSizes[i]);
            if (aliceSizes.includes(need) && (aTot - need + bobSizes[i] === even)) {
                return [need, bobSizes[i]];
            }
        }
    }  
};