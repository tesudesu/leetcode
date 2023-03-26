// https://leetcode.com/problems/distribute-money-to-maximum-children/

var distMoney = function(money, children) {
    if (money < children) {
        return -1;
    }
    const mon = money - children;
    let tot = 0;
    let max = Math.floor(mon/7);
    let remain;
    if (max <= children) {
        tot += max;
        remain = mon % 7;
    } else {
        tot += children;
        remain = mon - (children * 7);
    }
    if ((remain === 3 && tot === children - 1) || (remain !== 0 && tot === children)) {
        tot -= 1;
    }
    return tot;
};