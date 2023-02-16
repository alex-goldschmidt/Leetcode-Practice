/**
 * @param {string} s
 * @return {number}
 1. Create a new set object
 2. let length = 0
 3. for loop, let char = current part of string
 4. if set doesn't have char, add char to set
 5. else, delete char from set and increment length by 2
 6. return length + 1 if set.size > 0
 7. else, return length
 */
var longestPalindrome = function(s) {
    let set = new Set()
    let length = 0
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (!set.has(char)) set.add(char)
        else {
            set.delete(char)
            length += 2
        }
    }
    return length + (set.size > 0 ? 1 : 0)
};