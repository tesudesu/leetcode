// https://leetcode.com/problems/count-tested-devices-after-test-operations/

var countTestedDevices = function(batteryPercentages) {
    let tested = 0;

    for (let i = 0; i < batteryPercentages.length; i++) {
        if (batteryPercentages[i] - tested > 0) {
            tested++;
        }
    }

    return tested;
};