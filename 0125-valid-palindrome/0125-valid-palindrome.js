/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let filtered = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "")
    return filtered === filtered.split("").reverse().join("")
};