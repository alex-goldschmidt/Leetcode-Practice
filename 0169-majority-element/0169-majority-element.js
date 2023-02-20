/**
 * @param {number[]} nums
 * @return {number}
 1. create obj
 2. let maj = prices[0]
 3. let max = 1
 4. for loop
 5. increment count of current map element/convert count to int if null/unef
 6. if (map[num] > max)
        increment count of current element in map/convert it to int if null/undef
        set max = current element 
 7. return maj        
 */
var majorityElement = function(nums) {
    let map = {}
    let maj = nums[0]
    let max = 1
    for (let num of nums) {
        map[num] = ~~map[num] + 1
        if (map[num] > max) {
            max = map[num]
            maj = num
        }
    }
    return maj
};