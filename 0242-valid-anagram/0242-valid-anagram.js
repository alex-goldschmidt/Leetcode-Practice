/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 1. if s & t are different lengths return false
 2. split.sort.join both strings
 3. return s === t
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    s = s.split("").sort().join()
    t = t.split("").sort().join()
    return s === t
};