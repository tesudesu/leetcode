// https://leetcode.com/problems/unique-email-addresses/

var numUniqueEmails = function(emails) {
    let all = [];
    for (let i = 0; i < emails.length; i++) {
        const split = emails[i].split('@');
        split[0] = split[0].replace(/\./g, '').replace(/\+[a-z]+/g, '');
        const email = split.join('@');
        all.push(email);
    }
    return new Set(all).size;
};