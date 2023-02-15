/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 - if s length != t length, return false; no way to have a anagram.
 - split each string into individual characters
 - sort each string
 - join each string back together
 - check if the two input strings have the same characters in the same order;
   this is necessary for a anagram to exist
 
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    s = s.split("").sort().join()
    t = t.split("").sort().join()
    return s === t
};