// https://leetcode.com/problems/successful-pairs-of-spells-and-potions/

var successfulPairs = function(spells, potions, success) {
    let ans = Array(spells.length);
    potions.sort((a, b) => (a - b));

    for (let i = 0; i < spells.length; i++) {
        let start = 0;
        let end = potions.length - 1;
        let mid;
        
        let minPotion = potions.length;

        while (start <= end) {
            mid = Math.floor((end - start)/2) + start;
            if (potions[mid] * spells[i] < success) {
                start = mid + 1;
            } else if (potions[mid] * spells[i] >= success) {
                minPotion = mid;
                end = mid - 1;
            }
        }
        
        ans[i] = potions.length - minPotion;
    }

    return ans;
};

// var successfulPairs = function(spells, potions, success) {
//     let ans = Array(spells.length);
//     potions.sort((a, b) => (a - b));

//     for (let i = 0; i < spells.length; i++) {
//         for (let j = 0; j < potions.length; j++) {
//             if (spells[i] * potions[j] >= success) {
//                 ans[i] = potions.length - j;
//                 break;
//             }
//             if (j === potions.length - 1) {
//                 ans[i] = 0;
//             }
//         }
//     }

//     return ans;
// };