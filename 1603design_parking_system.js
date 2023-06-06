// https://leetcode.com/problems/design-parking-system/

var ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};

ParkingSystem.prototype.addCar = function(carType) {
    if (carType === 1 && this.big > 0) {
        this.big--;
        return true;
    }
    if (carType === 2 && this.medium > 0) {
        this.medium--;
        return true;
    }
    if (carType === 3 && this.small > 0) {
        this.small--;
        return true;
    }
    return false;
};