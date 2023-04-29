// https://leetcode.com/problems/boats-to-save-people/

var numRescueBoats = function(people, limit) {
    let boats = 0;
    people.sort((a, b) => b - a);
    while (people.length > 0) {
        let person = people[0];
        if (person < limit) {
            if (limit - person >= people[people.length-1]) {
                people.pop();
            }
        }
        boats++;
        people.shift();    
    }
    return boats;
};