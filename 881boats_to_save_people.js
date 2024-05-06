// https://leetcode.com/problems/boats-to-save-people/

var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);
    let left = 0;
    let right = people.length - 1;
    let boats = 0;

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
        } else {
            right--;
        }
        boats++;
    }

    return boats;
};


// var numRescueBoats = function(people, limit) {
//     let boats = 0;
//     people.sort((a, b) => b - a);
//     while (people.length > 0) {
//         let person = people[0];
//         if (person < limit) {
//             if (limit - person >= people[people.length-1]) {
//                 people.pop();
//             }
//         }
//         boats++;
//         people.shift();    
//     }
//     return boats;
// };