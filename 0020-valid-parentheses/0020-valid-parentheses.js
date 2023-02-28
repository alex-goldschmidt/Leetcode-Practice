/**
 * @param {string} s
 * @return {boolean}
 1. Create stack array
 2. create map object that matches opening and closing parentheses
 3. for loop
        if opening parentheses in map, push closing parentheses on to stack
        if closing parentheses in map, stack.pop(). if not, return false
 4. check if stack is empty via "return !stack.length"       
 */
var isValid = function(s) {
    const stack = []
    const map = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (map[c]) stack.push(map[c])
        else if (c !== stack.pop()) return false
    }
    return !stack.length
};