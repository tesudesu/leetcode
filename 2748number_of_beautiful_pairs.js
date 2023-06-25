// https://leetcode.com/problems/number-of-beautiful-pairs/

var countBeautifulPairs = function(nums) {
    let pairs = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const firstString = nums[i].toString();
            const lastString = nums[j].toString();
            const first = Number(firstString[0]);
            const last = Number(lastString[lastString.length - 1]);
            if (isCoprime(first, last)) pairs++;
        }
    }

    return pairs;
};

const isCoprime = (num1, num2) => {
    const min = Math.min(num1, num2);
    for (let i = 2; i <= min; i++) {
        if (num1 % i === 0 && num2 % i === 0) return false;
    }
    return true;
}