/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 1. create hash map 
 2. for loop
 3. set diff variable equal to target - current element
 4. if diff in map, return current indice and index of diff value in the map
 5. else, add the current element to the map
 */
var twoSum = function(nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (diff in map) return [i, map[diff]]
        else map[nums[i]] = i
    }
};