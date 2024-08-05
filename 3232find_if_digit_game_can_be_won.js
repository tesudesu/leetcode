// https://leetcode.com/problems/find-if-digit-game-can-be-won/

var canAliceWin = function(nums) {
    let single = 0;
    let double = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 10) {
            double += nums[i];
        } else {
            single += nums[i];
        }
    }

    return single > double || double > single;
};