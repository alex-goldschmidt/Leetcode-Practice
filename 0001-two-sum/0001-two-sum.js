/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
  1. create hashmap
  2. for loop
  3. if diff in map, return its indice and the diff variable in the map
  4. else, add current element to the map
 */
var twoSum = function(nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (diff in map) return [i, map[diff]]
        else map[nums[i]] = i
    }
};