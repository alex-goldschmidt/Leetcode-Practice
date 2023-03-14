/**
 * @param {number[]} nums
 * @return {boolean}
 1. Create a hashmap 
 2. for loop to iterate over nums array
 3. if current element in hashmap, return true as it is a duplicate
 4. if current element not in hashmap and it's a duplicate, add it to hashmap
 5. Return false when no duplicate is found
 */
var containsDuplicate = function(nums) {
    let map = {}
    for (let num of nums) {
        if (map[num]) return true
        else map[num] = 1
    }
    return false
};